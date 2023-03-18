import {
  getByteLengthOfEncodedMqttPacketU16,
} from '../../../../../../../../functions/shared/number/u16/get-byte-length-of-encoded-mqtt-packet-u16';
import { IMqttPacketReceiveMaximumPropertyValue } from '../../mqtt-packet-receive-maximum-property.type';

export function getByteLengthOfEncodedMqttPacketReceiveMaximumPropertyValue(
  input: IMqttPacketReceiveMaximumPropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketU16();
}
