import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketReceiveMaximumProperty } from '../../mqtt-packet-receive-maximum-property.type';
import {
  getByteLengthOfEncodedMqttPacketReceiveMaximumPropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-receive-maximum-property-value';

export function getByteLengthOfEncodedMqttPacketReceiveMaximumProperty(
  input: IMqttPacketReceiveMaximumProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketReceiveMaximumPropertyValue(input.getValue());
}
