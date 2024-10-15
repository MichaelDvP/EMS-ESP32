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

#ifndef EMSESP_KNX_H_
#define EMSESP_KNX_H_

#include <WiFi.h>
#include <WiFiUdp.h>
#include <uuid/log.h>


namespace emsesp {

class Knx {
  public:
    bool start(const char * multiCastAddress, uint16_t multiCastPort);
    bool onChange(const char * device, const char * tag, const char * name, const char * value);
    // ip stuff
    uint32_t currentIpAddress();
    uint32_t currentSubnetMask();
    uint32_t currentDefaultGateway();
    void     macAddress(uint8_t * addr);

    // unique serial number
    uint32_t uniqueSerialNumber();

    // basic stuff
    void restart();

    //multicast
    void setupMultiCast(uint32_t addr, uint16_t port);
    void closeMultiCast();
    bool sendBytesMultiCast(uint8_t * buffer, uint16_t len);
    int  readBytesMultiCast(uint8_t * buffer, uint16_t maxLen);

    //unicast
    bool sendBytesUniCast(uint32_t addr, uint16_t port, uint8_t * buffer, uint16_t len);

    //memory
    uint8_t * getEepromBuffer(uint32_t size);
    void      commitToEeprom();

  private:
    WiFiUDP * _udp = nullptr;

    static const uint32_t    LOOP_TIME = 5; // 5 ms
    static uuid::log::Logger logger_;

    static void knx_loop_task(void * pvParameters);
    static void loop();

    bool getValue(const char * device, const char * tag, const char * name, char * value, size_t len);
    bool setValue(const char * device, const char * tag, const char * name, const char * value);

    uint8_t * eepromBuf_  = nullptr;
    size_t    eepromSize_ = 0;
};

} // namespace emsesp

#endif //EMSESP_MODBUS_H_
