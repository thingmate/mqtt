import {
  createReadonlyStringBufferFromString,
} from '../../../../../../classes/string-buffer/readonly/implementations/create-readonly-string-buffer-from-string';
import { IReadonlyMqttPacketTopic } from '../readonly-mqtt-packet-topic.type';
import { createReadonlyMqttPacketTopicFromStringBuffer } from './create-readonly-mqtt-packet-topic-from-string-buffer';

export function createReadonlyMqttPacketTopicFromString(
  input: string,
): IReadonlyMqttPacketTopic {
  return createReadonlyMqttPacketTopicFromStringBuffer(
    createReadonlyStringBufferFromString(input),
  );
}

