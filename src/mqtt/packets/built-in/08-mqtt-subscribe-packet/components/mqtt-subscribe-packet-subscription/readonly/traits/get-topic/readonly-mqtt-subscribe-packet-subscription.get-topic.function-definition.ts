import { IReadonlyMqttPacketTopic } from '../../../../../../../components/mqtt-packet-topic/readonly/readonly-mqtt-packet-topic.type';

export interface IReadonlyMqttSubscribePacketSubscriptionGetTopicFunction {
  (): IReadonlyMqttPacketTopic;
}
