# Changelog

## Added to official dev build

- mqtt publish single values on change (subscribe & publish format)
- names and offset for up to 10 dallassensors, console commands `sensor name` and `show sensor`
- add commands without value to web
- optional show temperatures in Fahrenheit
- show analog input in web (sensors)
- show templates and allowed enum settings in web value settings
- show mqtt publish count and queue on web
- show bus/sensor with count/error (quality)

## Added

- support for IPv6 (web/api/mqtt, not syslog) (#83)
- System Log in Web UI will show current time if the NTP Service is enabled (#82)
- Network settings for Tx-power, WiFi-bandwidth, WiFi-sleepmode (#83)
- optional low clockrate (160 MHz) (#83)

## Fixed

## Changed from official dev build

- `info` command always shows short names in API.
- bool format and dallasformat always used for MQTT and API
- console `show` command with options `[devices | users | ems | mqtt | system | commands | sensor]`

## Changed

- removed Rx echo failures counting as incomplete telegrams. Bad telegrams show as Warning and not Errors. [#80](https://github.com/emsesp/EMS-ESP32/issues/80)
- add upload_sec to `api/system/info` and removed # from some names to keep consistent with MQTT heartbeat
- added debug target to PlatformIO build to help hunt down system crashes

## Removed
