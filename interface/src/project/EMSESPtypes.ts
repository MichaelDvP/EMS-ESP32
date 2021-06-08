export interface EMSESPSettings {
  tx_mode: number;
  tx_delay: number;
  ems_bus_id: number;
  syslog_enabled: boolean;
  syslog_level: number;
  syslog_mark_interval: number;
  syslog_host: string;
  syslog_port: number;
  master_thermostat: number;
  shower_timer: boolean;
  shower_alert: boolean;
  rx_gpio: number;
  tx_gpio: number;
  dallas_gpio: number;
  dallas_parasite: boolean;
  led_gpio: number;
  hide_led: boolean;
  notoken_api: boolean;
  analog_enabled: boolean;
  pbutton_gpio: number;
  trace_raw: boolean;
  board_profile: string;
  fahrenheit: boolean;
}

export enum busConnectionStatus {
  BUS_STATUS_CONNECTED = 0,
  BUS_STATUS_TX_ERRORS = 1,
  BUS_STATUS_OFFLINE = 2
}

export interface EMSESPStatus {
  status: busConnectionStatus;
  tx_mode: number;
  rx_received: number;
  tx_sent: number;
  rx_quality: number;
  tx_quality: number;
  tx_fails: number;
  rx_fails: number;
  sensor_fails: number;
  sensor_reads: number;
  sensor_quality: number;
}

export interface Device {
  id: number;
  type: string;
  brand: string;
  name: string;
  deviceid: number;
  productid: number;
  version: string;
}

export interface Sensor {
  no: number;
  id: string;
  data: string;
  uom: number;
}

export interface EMSESPDevices {
  devices: Device[];
  sensors: Sensor[];
}

export interface DeviceValue {
  v: any;
  u: number;
  n: string;
  c: string;
}

export interface EMSESPDeviceData {
  name: string;
  data: DeviceValue[];
}

export enum DeviceValueUOM {
  NONE = 0,
  DEGREES,
  DEGREES_R,
  PERCENT,
  LMIN,
  KWH,
  WH,
  HOURS,
  MINUTES,
  UA,
  BAR,
  KW,
  W,
  KB,
  SECONDS,
  DBM,
  NUM,
  BOOLEAN,
  FAHRENHEIT,
  MV
}

export const DeviceValueUOM_s = [
  '',
  '°C',
  '°C',
  '%',
  'l/min',
  'kWh',
  'Wh',
  'hours',
  'minutes',
  'uA',
  'bar',
  'kW',
  'W',
  'KB',
  'seconds',
  'dBm',
  'number',
  'on/off',
  '°F',
  'mV'
];
