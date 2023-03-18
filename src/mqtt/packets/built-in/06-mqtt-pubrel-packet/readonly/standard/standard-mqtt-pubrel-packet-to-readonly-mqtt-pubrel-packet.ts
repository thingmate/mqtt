import {
  createReadonlyMqttPacketIdFromNumber,
} from '../../../../components/mqtt-packet-id/readonly/implementations/create-readonly-mqtt-packet-id-from-number';
import {
  standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/standard-mqtt-packet-property-list-to-readonly-mqtt-packet-property-list';
import {
  standardMqttPacketPubrelReasonToReadonlyMqttPacketPubrelReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/06-pubrel/standard/standard-mqtt-packet-pubrel-reason-to-readonly-mqtt-packet-pubrel-reason';
import { createReadonlyMqttPubrelPacket } from '../implementations/create-readonly-mqtt-pubrel-packet';
import { IReadonlyMqttPubrelPacket } from '../readonly-mqtt-pubrel-packet.type';
import { IStandardMqttPubrelPacket } from './standard-mqtt-pubrel-packet.type';

export function standardMqttPubrelPacketToReadonlyMqttPubrelPacket(
  {
    packetId,
    reason,
    properties,
  }: Omit<IStandardMqttPubrelPacket, 'type'>,
): IReadonlyMqttPubrelPacket {
  return createReadonlyMqttPubrelPacket({
    packetId: createReadonlyMqttPacketIdFromNumber(packetId),
    reason: standardMqttPacketPubrelReasonToReadonlyMqttPacketPubrelReason(reason),
    properties: standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList(properties),
  });
}
