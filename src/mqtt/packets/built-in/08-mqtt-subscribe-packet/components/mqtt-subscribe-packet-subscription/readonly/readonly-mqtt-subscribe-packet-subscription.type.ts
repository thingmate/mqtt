import {
  IReadonlyMqttSubscribePacketSubscriptionGetNoLocalTrait,
} from './traits/get-no-local/readonly-mqtt-subscribe-packet-subscription.get-no-local.trait';
import {
  IReadonlyMqttSubscribePacketSubscriptionGetQoSTrait,
} from './traits/get-qos/readonly-mqtt-subscribe-packet-subscription.get-qos.trait';
import {
  IReadonlyMqttSubscribePacketSubscriptionGetRetainAsPublishedTrait,
} from './traits/get-retain-as-published/readonly-mqtt-subscribe-packet-subscription.get-retain-as-published.trait';
import {
  IReadonlyMqttSubscribePacketSubscriptionGetRetainHandlingTrait,
} from './traits/get-retain-handling/readonly-mqtt-subscribe-packet-subscription.get-retain-handling.trait';
import {
  IReadonlyMqttSubscribePacketSubscriptionGetTopicTrait,
} from './traits/get-topic/readonly-mqtt-subscribe-packet-subscription.get-topic.trait';

export interface IReadonlyMqttSubscribePacketSubscription extends //
  IReadonlyMqttSubscribePacketSubscriptionGetTopicTrait,
  IReadonlyMqttSubscribePacketSubscriptionGetQoSTrait,
  IReadonlyMqttSubscribePacketSubscriptionGetNoLocalTrait,
  IReadonlyMqttSubscribePacketSubscriptionGetRetainAsPublishedTrait,
  IReadonlyMqttSubscribePacketSubscriptionGetRetainHandlingTrait
//
{

}
