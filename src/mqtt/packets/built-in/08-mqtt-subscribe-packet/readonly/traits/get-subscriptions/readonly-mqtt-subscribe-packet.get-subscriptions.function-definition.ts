import {
  IReadonlyMqttSubscribePacketSubscription,
} from '../../../components/mqtt-subscribe-packet-subscription/readonly/readonly-mqtt-subscribe-packet-subscription.type';

export interface IReadonlyMqttSubscribePacketGetSubscriptionsFunction {
  (): readonly IReadonlyMqttSubscribePacketSubscription[];
}
