# Changelog

Difference to dev build:

## Added

- mqtt publish single values on change (subscribe & publish format)
- names and offset for up to 10 dallassensors, console commands `sensor name` and `show sensor`
- add commands without value to web
- optional show temperatures in Fahrenheit
- show analog input in web (sensors)

## Fixed

- HA thermostat OFF-mode for RC100/300 sets manual 0°C

## Changed

- show mqtt publishes on web
- show bus/sensor with count/error (quality)
- HA thermostat mode was not in sync with actual mode [#66](https://github.com/emsesp/EMS-ESP32/issues/66)
- Don't publish rssi if Wifi is disabled and ethernet is being used

## Changed

- `info` command always shows full names in API. For short names query the device or name directly, e.g. `http://ems-esp/api/boiler`
- free memory is shown in kilobytes
- boiler's warm water entities have ww added to the Home Assistant entity name [#67](https://github.com/emsesp/EMS-ESP32/issues/67)
- improved layout and rendering of device values in the WebUI, also the edit value screen

## Removed
