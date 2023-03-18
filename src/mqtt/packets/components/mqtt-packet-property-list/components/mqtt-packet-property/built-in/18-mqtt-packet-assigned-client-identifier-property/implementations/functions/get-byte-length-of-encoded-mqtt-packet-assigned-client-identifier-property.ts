import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketAssignedClientIdentifierProperty } from '../../mqtt-packet-assigned-client-identifier-property.type';
import {
  getByteLengthOfEncodedMqttPacketAssignedClientIdentifierPropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-assigned-client-identifier-property-value';

export function getByteLengthOfEncodedMqttPacketAssignedClientIdentifierProperty(
  input: IMqttPacketAssignedClientIdentifierProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketAssignedClientIdentifierPropertyValue(input.getValue());
}
