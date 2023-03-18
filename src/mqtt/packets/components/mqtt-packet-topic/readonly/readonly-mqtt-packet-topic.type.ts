import { IReadonlyStringBuffer } from '../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import { IReadonlyMqttPacketTopicMatchesTrait } from './traits/matches/readonly-mqtt-packet-topic.matches.trait';

export interface IReadonlyMqttPacketTopic extends IReadonlyStringBuffer, //
  IReadonlyMqttPacketTopicMatchesTrait
//
{

}
