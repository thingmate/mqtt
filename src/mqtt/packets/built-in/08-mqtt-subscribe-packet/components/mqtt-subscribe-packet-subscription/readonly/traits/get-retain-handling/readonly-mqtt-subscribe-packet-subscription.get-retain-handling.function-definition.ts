import { MQTT_SUBSCRIBE_PACKET_SUBSCRIPTION_RETAIN_HANDLING } from './mqtt-subscribe-packet-subscription-retain-handling.enum';

export interface IReadonlyMqttSubscribePacketSubscriptionGetRetainHandlingFunction {
  (): MQTT_SUBSCRIBE_PACKET_SUBSCRIPTION_RETAIN_HANDLING;
}
