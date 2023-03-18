import {
  createReadonlyMqttPacketIdFromNumber,
} from '../../../../components/mqtt-packet-id/readonly/implementations/create-readonly-mqtt-packet-id-from-number';
import {
  standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/standard-mqtt-packet-property-list-to-readonly-mqtt-packet-property-list';
import {
  standardMqttPacketPubcompReasonToReadonlyMqttPacketPubcompReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/07-pubcomp/standard/standard-mqtt-packet-pubcomp-reason-to-readonly-mqtt-packet-pubcomp-reason';
import { createReadonlyMqttPubcompPacket } from '../implementations/create-readonly-mqtt-pubcomp-packet';
import { IReadonlyMqttPubcompPacket } from '../readonly-mqtt-pubcomp-packet.type';
import { IStandardMqttPubcompPacket } from './standard-mqtt-pubcomp-packet.type';

export function standardMqttPubcompPacketToReadonlyMqttPubcompPacket(
  {
    packetId,
    reason,
    properties,
  }: Omit<IStandardMqttPubcompPacket, 'type'>,
): IReadonlyMqttPubcompPacket {
  return createReadonlyMqttPubcompPacket({
    packetId: createReadonlyMqttPacketIdFromNumber(packetId),
    reason: standardMqttPacketPubcompReasonToReadonlyMqttPacketPubcompReason(reason),
    properties: standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList(properties),
  });
}
