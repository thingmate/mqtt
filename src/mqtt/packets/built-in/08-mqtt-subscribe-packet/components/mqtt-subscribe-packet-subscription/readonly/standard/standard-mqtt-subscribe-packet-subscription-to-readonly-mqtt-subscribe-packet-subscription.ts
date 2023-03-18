import {
  createReadonlyMqttPacketTopicFromString,
} from '../../../../../../components/mqtt-packet-topic/readonly/implementations/create-readonly-mqtt-packet-topic-from-string';
import { createReadonlyMqttSubscribePacketSubscription } from '../implementations/create-readonly-mqtt-subscribe-packet-subscription';
import { IReadonlyMqttSubscribePacketSubscription } from '../readonly-mqtt-subscribe-packet-subscription.type';
import { IStandardMqttSubscribePacketSubscription } from './standard-mqtt-subscribe-packet-subscription.type';

export function standardMqttSubscribePacketSubscriptionToReadonlyMqttSubscribePacketSubscription(
  {
    topic,
    qos,
    noLocal,
    retainAsPublished,
    retainHandling,
  }: IStandardMqttSubscribePacketSubscription,
): IReadonlyMqttSubscribePacketSubscription {
  return createReadonlyMqttSubscribePacketSubscription({
    topic: createReadonlyMqttPacketTopicFromString(topic),
    qos,
    noLocal,
    retainAsPublished,
    retainHandling,
  });
}
