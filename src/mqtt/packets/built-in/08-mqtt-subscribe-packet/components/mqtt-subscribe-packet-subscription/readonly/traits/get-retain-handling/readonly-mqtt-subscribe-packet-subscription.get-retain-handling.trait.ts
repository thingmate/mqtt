import {
  IReadonlyMqttSubscribePacketSubscriptionGetRetainHandlingFunction,
} from './readonly-mqtt-subscribe-packet-subscription.get-retain-handling.function-definition';

export interface IReadonlyMqttSubscribePacketSubscriptionGetRetainHandlingTrait {
  readonly getRetainHandling: IReadonlyMqttSubscribePacketSubscriptionGetRetainHandlingFunction;
}
