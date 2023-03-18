import {
  getByteLengthOfEncodedMqttPacketU16,
} from '../../../../../../../../functions/shared/number/u16/get-byte-length-of-encoded-mqtt-packet-u16';
import { IMqttPacketMaximumQoSPropertyValue } from '../../mqtt-packet-maximum-qos-property.type';

export function getByteLengthOfEncodedMqttPacketMaximumQoSPropertyValue(
  input: IMqttPacketMaximumQoSPropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketU16();
}
