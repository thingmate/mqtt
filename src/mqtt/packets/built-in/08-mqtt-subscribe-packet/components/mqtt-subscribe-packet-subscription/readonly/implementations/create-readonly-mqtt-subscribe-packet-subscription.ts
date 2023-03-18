import { QOS } from '../../../../../../../constants/qos.enum';
import { IReadonlyMqttPacketTopic } from '../../../../../../components/mqtt-packet-topic/readonly/readonly-mqtt-packet-topic.type';
import { IReadonlyMqttSubscribePacketSubscription } from '../readonly-mqtt-subscribe-packet-subscription.type';
import {
  MQTT_SUBSCRIBE_PACKET_SUBSCRIPTION_RETAIN_HANDLING,
} from '../traits/get-retain-handling/mqtt-subscribe-packet-subscription-retain-handling.enum';

export interface IReadonlyMqttSubscribePacketSubscriptionContext {
  topic: IReadonlyMqttPacketTopic;
  qos: QOS;
  noLocal: boolean; // V5
  retainAsPublished: boolean; // V5
  retainHandling: MQTT_SUBSCRIBE_PACKET_SUBSCRIPTION_RETAIN_HANDLING; // V5
}

export function createReadonlyMqttSubscribePacketSubscription(
  context: IReadonlyMqttSubscribePacketSubscriptionContext,
): IReadonlyMqttSubscribePacketSubscription {
  const getTopic = (): IReadonlyMqttPacketTopic => {
    return context.topic;
  };

  const getQoS = (): QOS => {
    return context.qos;
  };

  const getNoLocal = (): boolean => {
    return context.noLocal;
  };

  const getRetainAsPublished = (): boolean => {
    return context.retainAsPublished;
  };

  const getRetainHandling = (): MQTT_SUBSCRIBE_PACKET_SUBSCRIPTION_RETAIN_HANDLING => {
    return context.retainHandling;
  };

  return {
    getTopic,
    getQoS,
    getNoLocal,
    getRetainAsPublished,
    getRetainHandling,
  };
}

