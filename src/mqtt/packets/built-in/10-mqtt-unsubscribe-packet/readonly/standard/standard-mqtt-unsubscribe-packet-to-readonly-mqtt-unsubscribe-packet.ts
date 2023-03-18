import {
  createReadonlyStringBufferFromString,
} from '../../../../../../classes/string-buffer/readonly/implementations/create-readonly-string-buffer-from-string';
import {
  createReadonlyMqttPacketIdFromNumber,
} from '../../../../components/mqtt-packet-id/readonly/implementations/create-readonly-mqtt-packet-id-from-number';
import {
  standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/standard-mqtt-packet-property-list-to-readonly-mqtt-packet-property-list';
import { createReadonlyMqttUnsubscribePacket } from '../implementations/create-readonly-mqtt-unsubscribe-packet';
import { IReadonlyMqttUnsubscribePacket } from '../readonly-mqtt-unsubscribe-packet.type';
import { IStandardMqttUnsubscribePacket } from './standard-mqtt-unsubscribe-packet.type';

export function standardMqttUnsubscribePacketToReadonlyMqttUnsubscribePacket(
  {
    packetId,
    properties,
    unsubscriptions,
  }: Omit<IStandardMqttUnsubscribePacket, 'type'>,
): IReadonlyMqttUnsubscribePacket {
  return createReadonlyMqttUnsubscribePacket({
    packetId: createReadonlyMqttPacketIdFromNumber(packetId),
    properties: standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList(properties),
    unsubscriptions: unsubscriptions.map(createReadonlyStringBufferFromString),
  });
}
