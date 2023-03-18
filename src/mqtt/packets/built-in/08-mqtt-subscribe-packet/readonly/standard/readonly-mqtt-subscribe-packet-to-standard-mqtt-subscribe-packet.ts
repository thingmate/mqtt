import {
  readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/readonly-mqtt-packet-property-list-to-standard-mqtt-packet-property-list';
import {
  readonlyMqttSubscribePacketSubscriptionToStandardMqttSubscribePacketSubscription,
} from '../../components/mqtt-subscribe-packet-subscription/readonly/standard/readonly-mqtt-subscribe-packet-subscription-to-standard-mqtt-subscribe-packet-subscription';
import { IReadonlyMqttSubscribePacket } from '../readonly-mqtt-subscribe-packet.type';
import { IStandardMqttSubscribePacket } from './standard-mqtt-subscribe-packet.type';

export function readonlyMqttSubscribePacketToStandardMqttSubscribePacket(
  {
    getType,
    getPacketId,
    getProperties,
    getSubscriptions,
  }: IReadonlyMqttSubscribePacket,
): IStandardMqttSubscribePacket {
  return {
    type: getType(),
    packetId: getPacketId().get(),
    properties: readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList(getProperties()),
    subscriptions: getSubscriptions().map(readonlyMqttSubscribePacketSubscriptionToStandardMqttSubscribePacketSubscription),
  };
}
