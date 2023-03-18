import {
  getByteLengthOfEncodedMqttPacketU16,
} from '../../../../../../../../functions/shared/number/u16/get-byte-length-of-encoded-mqtt-packet-u16';
import { IMqttPacketServerKeepAlivePropertyValue } from '../../mqtt-packet-server-keep-alive-property.type';

export function getByteLengthOfEncodedMqttPacketServerKeepAlivePropertyValue(
  input: IMqttPacketServerKeepAlivePropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketU16();
}
