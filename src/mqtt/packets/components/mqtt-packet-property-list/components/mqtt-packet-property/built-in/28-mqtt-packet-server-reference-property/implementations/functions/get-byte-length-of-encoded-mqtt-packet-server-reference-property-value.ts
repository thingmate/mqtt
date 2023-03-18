import {
  getByteLengthOfEncodedMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../functions/shared/string-buffer/get-byte-length-of-encoded-mqtt-packet-string-buffer';
import { IMqttPacketServerReferencePropertyValue } from '../../mqtt-packet-server-reference-property.type';

export function getByteLengthOfEncodedMqttPacketServerReferencePropertyValue(
  input: IMqttPacketServerReferencePropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(input);
}
