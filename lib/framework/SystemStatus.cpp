#include <SystemStatus.h>

#ifdef ESP_IDF_VERSION_MAJOR // IDF 4+
#if CONFIG_IDF_TARGET_ESP32 // ESP32/PICO-D4
#include "../esp32/rom/rtc.h"
#elif CONFIG_IDF_TARGET_ESP32S2
#include "../esp32s2/rom/rtc.h"
#elif CONFIG_IDF_TARGET_ESP32C3
#include "../esp32c3/rom/rtc.h"
#else
#error Target CONFIG_IDF_TARGET is not supported
#endif
#else // ESP32 Before IDF 4.0
#include "../rom/rtc.h"
#endif

#include "../../src/emsesp_stub.hpp" // proddy added

using namespace std::placeholders; // for `_1` etc

SystemStatus::SystemStatus(AsyncWebServer * server, SecurityManager * securityManager) {
    server->on(SYSTEM_STATUS_SERVICE_PATH,
               HTTP_GET,
               securityManager->wrapRequest(std::bind(&SystemStatus::systemStatus, this, _1), AuthenticationPredicates::IS_AUTHENTICATED));
}

const __FlashStringHelper * SystemStatus::show_reset_reason(uint8_t reason) {
    switch (reason) {
    case 1 : return F("POWERON_RESET");          /**<1,  Vbat power on reset*/
    case 3 : return F("SW_RESET");               /**<3,  Software reset digital core*/
    case 4 : return F("OWDT_RESET");             /**<4,  Legacy watch dog reset digital core*/
    case 5 : return F("DEEPSLEEP_RESET");        /**<5,  Deep Sleep reset digital core*/
    case 6 : return F("SDIO_RESET");             /**<6,  Reset by SLC module, reset digital core*/
    case 7 : return F("TG0WDT_SYS_RESET");       /**<7,  Timer Group0 Watch dog reset digital core*/
    case 8 : return F("TG1WDT_SYS_RESET");       /**<8,  Timer Group1 Watch dog reset digital core*/
    case 9 : return F("RTCWDT_SYS_RESET");       /**<9,  RTC Watch dog Reset digital core*/
    case 10 : return F("INTRUSION_RESET");       /**<10, Instrusion tested to reset CPU*/
    case 11 : return F("TGWDT_CPU_RESET");       /**<11, Time Group reset CPU*/
    case 12 : return F("SW_CPU_RESET");          /**<12, Software reset CPU*/
    case 13 : return F("RTCWDT_CPU_RESET");      /**<13, RTC Watch dog Reset CPU*/
    case 14 : return F("EXT_CPU_RESET");         /**<14, for APP CPU, reseted by PRO CPU*/
    case 15 : return F("RTCWDT_BROWN_OUT_RESET");/**<15, Reset when the vdd voltage is not stable*/
    case 16 : return F("RTCWDT_RTC_RESET");      /**<16, RTC Watch dog reset digital core and rtc module*/
    default : return F("NO_MEAN");
    /*
    case 1  : return F("Vbat power on reset");
    case 3  : return F("Software reset digital core");
    case 4  : return F("Legacy watch dog reset digital core");
    case 5  : return F("Deep Sleep reset digital core");
    case 6  : return F("Reset by SLC module, reset digital core");
    case 7  : return F("Timer Group0 Watch dog reset digital core");
    case 8  : return F("Timer Group1 Watch dog reset digital core");
    case 9  : return F("RTC Watch dog Reset digital core");
    case 10 : return F("Instrusion tested to reset CPU");
    case 11 : return F("Time Group reset CPU");
    case 12 : return F("Software reset CPU");
    case 13 : return F("RTC Watch dog Reset CPU");
    case 14 : return F("for APP CPU, reseted by PRO CPU");
    case 15 : return F("Reset when the vdd voltage is not stable");
    case 16 : return F("RTC Watch dog reset digital core and rtc module");
    default : return F("NO_MEAN");
    */
    }
    return F("NO_MEAN");
}


void SystemStatus::systemStatus(AsyncWebServerRequest * request) {
    AsyncJsonResponse * response = new AsyncJsonResponse(false, MAX_ESP_STATUS_SIZE);
    JsonObject          root     = response->getRoot();
    root["emsesp_version"]       = EMSESP_APP_VERSION;
    root["esp_platform"]         = "ESP32";
    root["max_alloc_heap"]       = ESP.getMaxAllocHeap();
    root["psram_size"]           = ESP.getPsramSize();
    root["free_psram"]           = ESP.getFreePsram();
    root["cpu_freq_mhz"]         = ESP.getCpuFreqMHz();
    root["free_heap"]            = ESP.getFreeHeap();
    root["sdk_version"]          = ESP.getSdkVersion();
    root["flash_chip_size"]      = ESP.getFlashChipSize();
    root["flash_chip_speed"]     = ESP.getFlashChipSpeed();

    root["fs_total"] = LITTLEFS.totalBytes();
    root["fs_used"]  = LITTLEFS.usedBytes();
    root["uptime"]   = uuid::log::format_timestamp_ms(uuid::get_uptime_ms(), 3).substr(0, 12);
    root["reset1"]   = show_reset_reason(rtc_get_reset_reason(0));
    root["reset2"]   = show_reset_reason(rtc_get_reset_reason(1));

    response->setLength();
    request->send(response);
}
