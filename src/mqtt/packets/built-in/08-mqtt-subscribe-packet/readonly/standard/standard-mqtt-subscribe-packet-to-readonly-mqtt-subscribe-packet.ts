import {
  createReadonlyMqttPacketIdFromNumber,
} from '../../../../components/mqtt-packet-id/readonly/implementations/create-readonly-mqtt-packet-id-from-number';
import {
  standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/standard-mqtt-packet-property-list-to-readonly-mqtt-packet-property-list';
import {
  standardMqttSubscribePacketSubscriptionToReadonlyMqttSubscribePacketSubscription,
} from '../../components/mqtt-subscribe-packet-subscription/readonly/standard/standard-mqtt-subscribe-packet-subscription-to-readonly-mqtt-subscribe-packet-subscription';
import { createReadonlyMqttSubscribePacket } from '../implementations/create-readonly-mqtt-subscribe-packet';
import { IReadonlyMqttSubscribePacket } from '../readonly-mqtt-subscribe-packet.type';
import { IStandardMqttSubscribePacket } from './standard-mqtt-subscribe-packet.type';

export function standardMqttSubscribePacketToReadonlyMqttSubscribePacket(
  {
    packetId,
    properties,
    subscriptions,
  }: Omit<IStandardMqttSubscribePacket, 'type'>,
): IReadonlyMqttSubscribePacket {
  return createReadonlyMqttSubscribePacket({
    packetId: createReadonlyMqttPacketIdFromNumber(packetId),
    properties: standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList(properties),
    subscriptions: subscriptions.map(standardMqttSubscribePacketSubscriptionToReadonlyMqttSubscribePacketSubscription),
  });
}
