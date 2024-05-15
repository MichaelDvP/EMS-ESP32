
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
#include "emsesp.h"

namespace emsesp {

uuid::log::Logger Knx::logger_{"KNX", uuid::log::Facility::DAEMON};

/*
* start knx, create a multicast and unicast udp server, listen to packets
*/
bool Knx::start(const char * multicastaddress, uint16_t multiCastPort) {
    IPAddress multiCastAddress;
    multiCastAddress.fromString(multicastaddress);
    _udp = new WiFiUDP;
    if (_udp == nullptr) {
        LOG_ERROR("KNX failed");
        return false;
    }
    _udp->beginMulticast(multiCastAddress, multiCastPort);
    xTaskCreatePinnedToCore(knx_loop_task, "knxlooptask", 4096, NULL, 2, NULL, portNUM_PROCESSORS - 1);
    LOG_INFO("KNX started");
    return true;
}

void Knx::knx_loop_task(void * pvParameters) {
    while (1) {
        static uint32_t last_loop = 0;
        if (millis() - last_loop >= LOOP_TIME) {
            last_loop = millis();
            // loop();
        } else {
            delay(1);
        }
    }
    vTaskDelete(NULL);
}

/*
* knx loop do something every 5 ms async.
*/
void Knx::loop() {
    // do loop
}

/*
* called every time a value on the ems-bus or emsesp changes 
*/
bool Knx::onChange(const char * device, const char * tag, const char * name, const char * value) {
    if (tag[0] != '\0') {
        LOG_DEBUG("KNX publish: %s/%s/%s = %s", device, tag, name, value);
    } else {
        LOG_DEBUG("KNX publish: %s/%s = %s", device, name, value);
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

uint32_t Knx::currentIpAddress() {
    return WiFi.localIP();
}

uint32_t Knx::currentSubnetMask() {
    return WiFi.subnetMask();
}

uint32_t Knx::currentDefaultGateway() {
    return WiFi.gatewayIP();
}

void Knx::macAddress(uint8_t * addr) {
    esp_wifi_get_mac(WIFI_IF_STA, addr);
}

uint32_t Knx::uniqueSerialNumber() {
    uint64_t chipid  = ESP.getEfuseMac();
    uint32_t upperId = (chipid >> 32) & 0xFFFFFFFF;
    uint32_t lowerId = (chipid & 0xFFFFFFFF);
    return (upperId ^ lowerId);
}

void Knx::restart() {
    ESP.restart();
}

void Knx::setupMultiCast(uint32_t addr, uint16_t port) {
    IPAddress mcastaddr(htonl(addr));

    LOG_DEBUG("setup multicast addr: %s port: %d ip: %s\n", mcastaddr.toString().c_str(), port, WiFi.localIP().toString().c_str());
    uint8_t result = _udp->beginMulticast(mcastaddr, port);
    LOG_DEBUG("result %d\n", result);
}

void Knx::closeMultiCast() {
    _udp->stop();
}

bool Knx::sendBytesMultiCast(uint8_t * buffer, uint16_t len) {
    //printHex("<- ",buffer, len);
    _udp->beginMulticastPacket();
    _udp->write(buffer, len);
    _udp->endPacket();
    return true;
}

int Knx::readBytesMultiCast(uint8_t * buffer, uint16_t maxLen) {
    int len = _udp->parsePacket();
    if (len == 0)
        return 0;

    if (len > maxLen) {
        LOG_DEBUG("udp buffer to small. was %d, needed %d\n", maxLen, len);
        return 0; // fatalError();
    }

    _udp->read(buffer, len);
    return len;
}

bool Knx::sendBytesUniCast(uint32_t addr, uint16_t port, uint8_t * buffer, uint16_t len) {
    IPAddress ucastaddr(htonl(addr));
    LOG_DEBUG("sendBytesUniCast endPacket fail");
    if (_udp->beginPacket(ucastaddr, port) == 1) {
        _udp->write(buffer, len);
        if (_udp->endPacket() == 0)
            LOG_DEBUG("sendBytesUniCast endPacket fail");
    } else
        LOG_DEBUG("sendBytesUniCast beginPacket fail");
    return true;
}


uint8_t * Knx::getEepromBuffer(size_t size) {
    if (eepromBuf_ != nullptr) {
        delete[] eepromBuf_;
    }
    eepromBuf_  = new uint8_t[size];
    eepromSize_ = size;
    EMSESP::nvs_.getBytes("knx", eepromBuf_, size);
    return eepromBuf_;
}

void Knx::commitToEeprom() {
    EMSESP::nvs_.putBytes("knx", eepromBuf_, eepromSize_);
}


} // namespace emsesp