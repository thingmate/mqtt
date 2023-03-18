import {
  getByteLengthOfEncodedMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../functions/shared/string-buffer/get-byte-length-of-encoded-mqtt-packet-string-buffer';
import { IMqttPacketResponseTopicPropertyValue } from '../../mqtt-packet-response-topic-property.type';

export function getByteLengthOfEncodedMqttPacketResponseTopicPropertyValue(
  input: IMqttPacketResponseTopicPropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(input);
}
