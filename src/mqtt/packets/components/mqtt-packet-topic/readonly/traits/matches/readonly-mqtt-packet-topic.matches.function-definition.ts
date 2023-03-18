import {
  IReadonlyStringBufferOrString,
} from '../../../../../../../classes/string-buffer/readonly/functions/readonly-string-buffer-or-string-to-string';

export interface IReadonlyMqttPacketTopicMatchesFunction {
  (
    topic: IReadonlyStringBufferOrString,
  ): boolean;
}
