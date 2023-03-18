import {
  getByteLengthOfEncodedMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../functions/shared/string-buffer/get-byte-length-of-encoded-mqtt-packet-string-buffer';
import { IMqttPacketAssignedClientIdentifierPropertyValue } from '../../mqtt-packet-assigned-client-identifier-property.type';

export function getByteLengthOfEncodedMqttPacketAssignedClientIdentifierPropertyValue(
  input: IMqttPacketAssignedClientIdentifierPropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(input);
}
