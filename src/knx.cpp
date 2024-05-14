
/*
 * EMS-ESP - https://github.com/emsesp/EMS-ESP
 * Copyright 2020-2024  Paul Derbyshire
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

#include "knx.h"
#include "LittleFS.h"


namespace emsesp {

uuid::log::Logger Knx::logger_{"KNX", uuid::log::Facility::DAEMON};
// use AsyncUDP, see:
// https://github.com/espressif/arduino-esp32/tree/master/libraries/AsyncUDP
AsyncUDP * Knx::_multiCast = nullptr;
AsyncUDP * Knx::_uniCast   = nullptr;

/*
* start knx, create a multicast and unicast udp server, listen to packets
*/
bool Knx::start(const char * multicastaddress, uint16_t multiCastPort, uint16_t Port, const char * remoteaddress) {
    IPAddress multiCastAddress;
    multiCastAddress.fromString(multicastaddress);
    if (_multiCast != nullptr || _uniCast != nullptr) {
        delete _multiCast;
        delete _uniCast;
    }
    _multiCast = new AsyncUDP;
    if (!_multiCast->listenMulticast(multiCastAddress, multiCastPort)) {
        LOG_ERROR("Start KNX failed");
        return false;
    }
    _multiCast->onPacket([this](AsyncUDPPacket packet) { onMultiCast(packet); });

    _uniCast = new AsyncUDP;
    if (remoteaddress) { // handle client
        IPAddress uniCastAddress;
        uniCastAddress.fromString(remoteaddress);
        if (!_uniCast->connect(uniCastAddress, Port)) {
            LOG_ERROR("KNX failed to connect to server");
            return false;
        }

    } else {                           // server
        if (!_uniCast->listen(Port)) { // for server
            LOG_ERROR("KNX Start failed");
            return false;
        }
    }
    _uniCast->onPacket([this](AsyncUDPPacket packet) { onUniCast(packet); });
    LOG_INFO("KNX started");
    return true;
}

/*
* knx loop do something every 5 ms in main loop, not async.
*/
void Knx::loop() {
    static uint32_t last_loop = 0;
    if ((uuid::get_uptime() - last_loop < LOOP_TIME)) {
        return;
    }
    last_loop = uuid::get_uptime();
    // do loop
}

/*
* we get a multicast packet
*/
bool Knx::onMultiCast(AsyncUDPPacket packet) {
    if (packet.length()) {
        LOG_DEBUG("KNX packet received: %s", Helpers::data_to_hex(packet.data(), packet.length()).c_str());
    }
    return true;
}

/*
* we get a unicast packet
*/
bool Knx::onUniCast(AsyncUDPPacket packet) {
    if (packet.length()) {
        LOG_DEBUG("KNX packet received: %s", Helpers::data_to_hex(packet.data(), packet.length()).c_str());
    }
    return true;
}

/*
* called every time a value on the ems-bus or emsesp changes 
*/
bool Knx::onChange(const char * device, const char * tag, const char * name, const char * value) {
    if (tag[0] != '\0') {
        LOG_DEBUG("KNX publish: %s/%s/%s = %s", device, tag, name, value);
        // _multiCast->printf("%s/%s/%s=%s", device, tag, name, value);
    } else {
        LOG_DEBUG("KNX publish: %s/%s = %s", device, name, value);
        // _multiCast->printf("%s/%s=%s", device, name, value);
    }
    return true;
}

/*
* get a emsesp value
*/
bool Knx::getValue(const char * device, const char * tag, const char * name, char * value, size_t len) {
    char cmd[COMMAND_MAX_LENGTH];
    if (strlen(tag)) {
        snprintf(cmd, sizeof(cmd), "%s/%s/%s/value", device, tag, name);
    } else {
        snprintf(cmd, sizeof(cmd), "%s/%s/value", device, name);
    }
    JsonDocument doc_in, doc_out;
    JsonObject   in  = doc_in.to<JsonObject>();
    JsonObject   out = doc_out.to<JsonObject>();

    Command::process(cmd, true, in, out);
    if (out.containsKey("api_data")) {
        String data = out["api_data"].as<String>();
        strlcpy(value, data.c_str(), len);
        return true;
    }
    LOG_ERROR("KNX get value failed for %s/%s/%s", device, tag, name);
    return false;
}

/*
* set an emsesp value 
*/

bool Knx::setValue(const char * device, const char * tag, const char * name, const char * value) {
    char cmd[COMMAND_MAX_LENGTH];
    if (strlen(tag)) {
        snprintf(cmd, sizeof(cmd), "%s/%s", tag, name);
    } else {
        snprintf(cmd, sizeof(cmd), "%s", name);
    }
    uint8_t devicetype = EMSdevice::device_name_2_device_type(device);
    if (Command::call(devicetype, cmd, value) != CommandRet::OK) {
        LOG_ERROR("KNX command failed for %s/%s/%s", device, tag, name);
        return false;
    }
    return true;
}

/*
* write knx config to file system
*/
bool Knx::writeFile() {
    File file = LittleFS.open("/knx_data", "w");
    if (!file) {
        return false;
    }
    // write your data here
    file.close();
    return true;
}

/*
* read knx config to file system
*/
bool Knx::readFile() {
    File file = LittleFS.open("/knx_data");
    if (!file) {
        return false;
    }
    // read your data here
    file.close();
    return true;
}

} // namespace emsesp