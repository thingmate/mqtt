import {
  createReadonlyMqttPacketIdFromNumber,
} from '../../../../components/mqtt-packet-id/readonly/implementations/create-readonly-mqtt-packet-id-from-number';
import {
  standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/standard-mqtt-packet-property-list-to-readonly-mqtt-packet-property-list';
import {
  standardMqttPacketSubackReasonToReadonlyMqttPacketSubackReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/09-suback/standard/standard-mqtt-packet-suback-reason-to-readonly-mqtt-packet-suback-reason';

import { createReadonlyMqttSubackPacket } from '../implementations/create-readonly-mqtt-suback-packet';
import { IReadonlyMqttSubackPacket } from '../readonly-mqtt-suback-packet.type';
import { IStandardMqttSubackPacket } from './standard-mqtt-suback-packet.type';

export function standardMqttSubackPacketToReadonlyMqttSubackPacket(
  {
    packetId,
    reasons,
    properties,
  }: Omit<IStandardMqttSubackPacket, 'type'>,
): IReadonlyMqttSubackPacket {
  return createReadonlyMqttSubackPacket({
    packetId: createReadonlyMqttPacketIdFromNumber(packetId),
    reasons: reasons.map(standardMqttPacketSubackReasonToReadonlyMqttPacketSubackReason),
    properties: standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList(properties),
  });
}
