import {
  getByteLengthOfEncodedMqttPacketU32,
} from '../../../../../../../../functions/shared/number/u32/get-byte-length-of-encoded-mqtt-packet-u32';
import { IMqttPacketMaximumPacketSizePropertyValue } from '../../mqtt-packet-maximum-packet-size-property.type';

export function getByteLengthOfEncodedMqttPacketMaximumPacketSizePropertyValue(
  input: IMqttPacketMaximumPacketSizePropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketU32();
}
