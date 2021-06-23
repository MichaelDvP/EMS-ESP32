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

- new command called `commands` which lists all available commands. `ems-esp/api/{device}/commands`
- More Home Assistant icons to match the UOMs
- new API. Using secure access tokens and OpenAPI standard. See `doc/EMS-ESP32 API.md` and [#50](https://github.com/emsesp/EMS-ESP32/issues/50)
- show log messages in Web UI [#71](https://github.com/emsesp/EMS-ESP32/issues/71)

## Fixed

## Changed from official dev build

- `info` command always shows short names in API.
- bool format and dallasformat always used for MQTT and API
- console `show` command with options `[devices | users | ems | mqtt | system | commands | sensor]`

## Changed

- HA thermostat mode was not in sync with actual mode [#66](https://github.com/emsesp/EMS-ESP32/issues/66)
- Don't publish rssi if Wifi is disabled and ethernet is being used
- free memory is shown in kilobytes
- boiler's warm water entities have ww added to the Home Assistant entity name [#67](https://github.com/emsesp/EMS-ESP32/issues/67)
- improved layout and rendering of device values in the WebUI, also the edit value screen

## Removed
