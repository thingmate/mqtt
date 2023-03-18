import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketMaximumQoSProperty } from '../../mqtt-packet-maximum-qos-property.type';
import {
  getByteLengthOfEncodedMqttPacketMaximumQoSPropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-maximum-qos-property-value';

export function getByteLengthOfEncodedMqttPacketMaximumQoSProperty(
  input: IMqttPacketMaximumQoSProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketMaximumQoSPropertyValue(input.getValue());
}
