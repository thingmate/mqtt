import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketUserProperty } from '../../mqtt-packet-user-property.type';
import { getByteLengthOfEncodedMqttPacketUserPropertyValue } from './get-byte-length-of-encoded-mqtt-packet-user-property-value';

export function getByteLengthOfEncodedMqttPacketUserProperty(
  input: IMqttPacketUserProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketUserPropertyValue(input.getValue());
}
