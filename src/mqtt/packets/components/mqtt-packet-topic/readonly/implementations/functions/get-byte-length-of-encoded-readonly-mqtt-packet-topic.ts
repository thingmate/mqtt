import {
  getByteLengthOfEncodedMqttPacketReadonlyStringBuffer,
} from '../../../../../functions/shared/string-buffer/get-byte-length-of-encoded-mqtt-packet-string-buffer';
import { IReadonlyMqttPacketTopic } from '../../readonly-mqtt-packet-topic.type';

export function getByteLengthOfEncodedReadonlyMqttPacketTopic(
  input: IReadonlyMqttPacketTopic,
): number {
  return getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(input);
}
