const ipAddressRegexp =
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

const ipv6PatternRegexp = /^([a-fA-F0-9:][a-fA-F0-9:]*[a-fA-F0-9:])$/;

export default function isIp(ipAddress: string) {
  return ipAddressRegexp.test(ipAddress) || ipv6PatternRegexp.test(ipAddress);
}
