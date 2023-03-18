import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketServerReferenceProperty } from '../../mqtt-packet-server-reference-property.type';
import {
  getByteLengthOfEncodedMqttPacketServerReferencePropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-server-reference-property-value';

export function getByteLengthOfEncodedMqttPacketServerReferenceProperty(
  input: IMqttPacketServerReferenceProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketServerReferencePropertyValue(input.getValue());
}
