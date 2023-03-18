import {
  getByteLengthOfEncodedMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../functions/shared/string-buffer/get-byte-length-of-encoded-mqtt-packet-string-buffer';
import { IMqttPacketReasonStringPropertyValue } from '../../mqtt-packet-reason-string-property.type';

export function getByteLengthOfEncodedMqttPacketReasonStringPropertyValue(
  input: IMqttPacketReasonStringPropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(input);
}
