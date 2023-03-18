import {
  IReadonlyStringBufferOrString,
  readonlyStringBufferOrStringToString,
} from '../../../../../../classes/string-buffer/readonly/functions/readonly-string-buffer-or-string-to-string';
import { IReadonlyStringBuffer } from '../../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import { IReadonlyMqttPacketTopic } from '../readonly-mqtt-packet-topic.type';
import { topicPatternToRexExp } from './functions/topic-pattern-to-rex-exp';

export function createReadonlyMqttPacketTopicFromStringBuffer(
  stringBuffer: IReadonlyStringBuffer,
): IReadonlyMqttPacketTopic {

  const topicRegExp: RegExp = topicPatternToRexExp(stringBuffer.toString());

  const matches = (
    topic: IReadonlyStringBufferOrString,
  ): boolean => {
    topicRegExp.lastIndex = 0;
    return topicRegExp.test(readonlyStringBufferOrStringToString(topic));
  };

  return {
    ...stringBuffer,
    matches,
  };
}

