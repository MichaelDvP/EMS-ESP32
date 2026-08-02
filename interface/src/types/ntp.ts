export enum NTPSyncStatus {
  NTP_DISABLED = 0,
  NTP_INACTIVE = 1,
  NTP_ACTIVE = 2
}

export interface NTPStatusType {
  status: NTPSyncStatus;
  utc_time: string;
  local_time: string;
  server: string;
}

export interface NTPSettingsType {
  enabled: boolean;
  server: string;
  tz_label: string;
  tz_format: string;
  thermostat_sync: number;
  tz_label_t: string;
  tz_format_t: string;
}

export interface Time {
  local_time: string;
}
