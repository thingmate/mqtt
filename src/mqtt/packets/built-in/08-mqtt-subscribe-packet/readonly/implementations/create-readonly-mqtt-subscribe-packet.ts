import { IReadonlyMqttPacketId } from '../../../../components/mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';
import {
  IReadonlyMqttSubscribePacketSubscription,
} from '../../components/mqtt-subscribe-packet-subscription/readonly/readonly-mqtt-subscribe-packet-subscription.type';
import { IMqttSubscribePacketType, MQTT_SUBSCRIBE_PACKET_TYPE } from '../../constants/mqtt-subscribe-packet-type.constant';
import { IReadonlyMqttSubscribePacket } from '../readonly-mqtt-subscribe-packet.type';
import {
  IReadonlyMqttSubscribePacketPropertyList,
} from '../traits/get-properties/readonly-mqtt-subscribe-packet.get-properties.function-definition';

export interface IReadonlyMqttSubscribePacketContext {
  packetId: IReadonlyMqttPacketId;
  properties: IReadonlyMqttSubscribePacketPropertyList;
  subscriptions: readonly IReadonlyMqttSubscribePacketSubscription[];
}

export function createReadonlyMqttSubscribePacket(
  context: IReadonlyMqttSubscribePacketContext,
): IReadonlyMqttSubscribePacket {
  const getType = (): IMqttSubscribePacketType => {
    return MQTT_SUBSCRIBE_PACKET_TYPE;
  };

  const getPacketId = (): IReadonlyMqttPacketId => {
    return context.packetId;
  };

  const getProperties = (): IReadonlyMqttSubscribePacketPropertyList => {
    return context.properties;
  };

  const getSubscriptions = (): readonly IReadonlyMqttSubscribePacketSubscription[] => {
    return context.subscriptions;
  };

  return {
    getType,
    getPacketId,
    getProperties,
    getSubscriptions,
  };
}

