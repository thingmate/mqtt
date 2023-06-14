import {
  IReadonlyStringBufferOrString,
} from '../../../../../../classes/string-buffer/readonly/functions/readonly-string-buffer-or-string-to-string';
import { createReadonlyMqttPacketTopicFromString } from '../implementations/create-readonly-mqtt-packet-topic-from-string';
import { createReadonlyMqttPacketTopicFromStringBuffer } from '../implementations/create-readonly-mqtt-packet-topic-from-string-buffer';
import { IReadonlyMqttPacketTopic } from '../readonly-mqtt-packet-topic.type';

export type IReadonlyMqttPacketTopicOrReadonlyStringBufferOrString =
  | IReadonlyMqttPacketTopic
  | IReadonlyStringBufferOrString
  ;

export function readonlyMqttPacketTopicOrReadonlyStringBufferOrStringToReadonlyMqttPacketTopic(
  input: IReadonlyMqttPacketTopicOrReadonlyStringBufferOrString,
): IReadonlyMqttPacketTopic {
  return (typeof input === 'string')
    ? createReadonlyMqttPacketTopicFromString(input)
    : (
      // @ts-ignore
      (typeof input['matches'] === 'function')
        ? (input as IReadonlyMqttPacketTopic)
        : createReadonlyMqttPacketTopicFromStringBuffer(input)
    );
}
