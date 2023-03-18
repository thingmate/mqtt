import {
  createReadonlyMqttPacketIdFromNumber,
} from '../../../../components/mqtt-packet-id/readonly/implementations/create-readonly-mqtt-packet-id-from-number';
import {
  standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/standard-mqtt-packet-property-list-to-readonly-mqtt-packet-property-list';
import {
  standardMqttPacketPubrecReasonToReadonlyMqttPacketPubrecReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/05-pubrec/standard/standard-mqtt-packet-pubrec-reason-to-readonly-mqtt-packet-pubrec-reason';
import { createReadonlyMqttPubrecPacket } from '../implementations/create-readonly-mqtt-pubrec-packet';
import { IReadonlyMqttPubrecPacket } from '../readonly-mqtt-pubrec-packet.type';
import { IStandardMqttPubrecPacket } from './standard-mqtt-pubrec-packet.type';

export function standardMqttPubrecPacketToReadonlyMqttPubrecPacket(
  {
    packetId,
    reason,
    properties,
  }: Omit<IStandardMqttPubrecPacket, 'type'>,
): IReadonlyMqttPubrecPacket {
  return createReadonlyMqttPubrecPacket({
    packetId: createReadonlyMqttPacketIdFromNumber(packetId),
    reason: standardMqttPacketPubrecReasonToReadonlyMqttPacketPubrecReason(reason),
    properties: standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList(properties),
  });
}
