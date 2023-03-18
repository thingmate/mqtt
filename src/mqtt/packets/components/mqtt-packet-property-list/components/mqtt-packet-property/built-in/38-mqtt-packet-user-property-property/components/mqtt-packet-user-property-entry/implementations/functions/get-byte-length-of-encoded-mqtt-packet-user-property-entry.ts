import {
  getByteLengthOfEncodedMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../../../functions/shared/string-buffer/get-byte-length-of-encoded-mqtt-packet-string-buffer';
import { IMqttPacketUserPropertyEntry } from '../../mqtt-packet-user-property-entry.type';

export function getByteLengthOfEncodedMqttPacketUserPropertyEntry(
  input: IMqttPacketUserPropertyEntry,
): number {
  return getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(input.getKey())
    + getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(input.getValue());
}
