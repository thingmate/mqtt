import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketMaximumPacketSizeProperty } from '../../mqtt-packet-maximum-packet-size-property.type';
import {
  getByteLengthOfEncodedMqttPacketMaximumPacketSizePropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-maximum-packet-size-property-value';

export function getByteLengthOfEncodedMqttPacketMaximumPacketSizeProperty(
  input: IMqttPacketMaximumPacketSizeProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketMaximumPacketSizePropertyValue(input.getValue());
}
