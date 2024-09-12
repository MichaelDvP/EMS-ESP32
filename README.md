# ![logo](media/EMS-ESP_logo_dark.png)

[![version](https://img.shields.io/github/release/emsesp/EMS-ESP32.svg?label=Latest%20Release)](https://github.com/emsesp/EMS-ESP32/blob/main/CHANGELOG.md)
[![release-date](https://img.shields.io/github/release-date/emsesp/EMS-ESP32.svg?label=Released)](https://github.com/emsesp/EMS-ESP32/commits/main)
[![license](https://img.shields.io/github/license/emsesp/EMS-ESP32.svg)](LICENSE)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=emsesp_EMS-ESP32&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=emsesp_EMS-ESP32)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9441142f49424ef891e8f5251866ee6b)](https://app.codacy.com/gh/emsesp/EMS-ESP32/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![downloads](https://img.shields.io/github/downloads/emsesp/EMS-ESP32/total.svg)](https://github.com/emsesp/EMS-ESP32/releases)
[![chat](https://img.shields.io/discord/816637840644505620.svg?style=flat-square&color=blueviolet)](https://discord.gg/3J3GgnzpyT)

[![GitHub stars](https://img.shields.io/github/stars/emsesp/EMS-ESP32.svg?style=social&label=Star)](https://github.com/emsesp/EMS-ESP32/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/emsesp/EMS-ESP32.svg?style=social&label=Fork)](https://github.com/emsesp/EMS-ES32P/network)
[![donate](https://img.shields.io/badge/donate-PayPal-blue.svg)](https://www.paypal.com/paypalme/prderbyshire/2)

**EMS-ESP** is an open-source firmware for the Espressif ESP32 microcontroller that communicates with **EMS** (Energy Management System) based equipment from manufacturers like Bosch, Buderus, Nefit, Junkers, Worcester and Sieger. It requires a small gateway circuit to interface with the EMS bus which can be purchased from <https://bbqkees-electronics.nl> or custom built.

## **Features**

- A multi-user, multi-language secure web interface to change settings and monitor incoming data
- A console, accessible via Serial and Telnet for more advanced monitoring
- Native support for Home Assistant, Domoticz and openHAB via [MQTT Discovery](https://www.home-assistant.io/docs/mqtt/discovery/)
- Can run standalone as an independent WiFi Access Point or join an existing WiFi network
- Easy first-time configuration via a web Captive Portal
- Support for more than [120+ EMS devices](https://emsesp.org/All-Devices/) (boilers, thermostats, solar modules, mixer modules, heat pumps, gateways, switches, heat sources)

## **Installing**

Go to [install.emsesp.org](https://install.emsesp.org) or look at the documentation link below on the different ways to install EMS-ESP.

## **Documentation**

For the complete documentation on how to install, configure and get support visit the [documentation at emsesp.org](https://emsesp.org).

## **Support**

To chat with the community reach out on our [Discord Server](https://discord.gg/3J3GgnzpyT).

If you like **EMS-ESP**, please give it a star, or fork it and contribute or offer a small donation!

## **Demo**

For a live demo of the Web UI click [demo.emsesp.org](https://demo.emsesp.org) and log in with any username/password, and change the language to English.

## **Contributors ✨**

EMS-ESP is a project owned and maintained by [proddy](https://github.com/proddy) and [MichaelDvP](https://github.com/MichaelDvP).

## **Libraries used**

- [esp8266-react](https://github.com/rjwats/esp8266-react) by @rjwats for the framework that provides the core of the Web UI
- [uuid-\*](https://github.com/nomis/mcu-uuid-console) from @nomis. The console, syslog, telnet and logging are based off these open source libraries
- [ArduinoJson](https://github.com/bblanchon/ArduinoJson) for all the JSON
- [espMqttClient](https://github.com/bertmelis/espMqttClient) for the MQTT client, with custom modifications from @MichaelDvP and @proddy
- ESPAsyncWebServer and AsyncTCP for the Web server and TCP backends, with custom modifications for performance

## **License**

This program is licensed under GPL-3.0

## **Screenshots**

### Web Interface

|                                    |                                  |
| ---------------------------------- | -------------------------------- |
| ![Web Settings](media/web_settings.png) | ![Web Status](media/web_status.png) |
| ![Web Devices](media/web_devices.png)  | ![Web MQTT](media/web_mqtt.png)   |
| ![Web Edit](media/web_edit.png)     | ![Web Log](media/web_log.png)    |

### Telnet Console

![Console](media/console0.png)

### Home Assistant

![Home Assistant](media/ha_lovelace.png)
