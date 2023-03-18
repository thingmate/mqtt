import { IReadonlyMqttSubscribePacketSubscription } from '../readonly-mqtt-subscribe-packet-subscription.type';
import { IStandardMqttSubscribePacketSubscription } from './standard-mqtt-subscribe-packet-subscription.type';

export function readonlyMqttSubscribePacketSubscriptionToStandardMqttSubscribePacketSubscription(
  {
    getTopic,
    getQoS,
    getNoLocal,
    getRetainAsPublished,
    getRetainHandling,
  }: IReadonlyMqttSubscribePacketSubscription,
): IStandardMqttSubscribePacketSubscription {
  return {
    topic: getTopic().toString(),
    qos: getQoS(),
    noLocal: getNoLocal(),
    retainAsPublished: getRetainAsPublished(),
    retainHandling: getRetainHandling(),
  };
}
