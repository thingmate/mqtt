import {
  createReadonlyMqttPacketIdFromNumber,
} from '../../../../components/mqtt-packet-id/readonly/implementations/create-readonly-mqtt-packet-id-from-number';
import {
  standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/standard-mqtt-packet-property-list-to-readonly-mqtt-packet-property-list';
import {
  standardMqttPacketPubackReasonToReadonlyMqttPacketPubackReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/04-puback/standard/standard-mqtt-packet-puback-reason-to-readonly-mqtt-packet-puback-reason';
import { createReadonlyMqttPubackPacket } from '../implementations/create-readonly-mqtt-puback-packet';
import { IReadonlyMqttPubackPacket } from '../readonly-mqtt-puback-packet.type';
import { IStandardMqttPubackPacket } from './standard-mqtt-puback-packet.type';

export function standardMqttPubackPacketToReadonlyMqttPubackPacket(
  {
    packetId,
    reason,
    properties,
  }: Omit<IStandardMqttPubackPacket, 'type'>,
): IReadonlyMqttPubackPacket {
  return createReadonlyMqttPubackPacket({
    packetId: createReadonlyMqttPacketIdFromNumber(packetId),
    reason: standardMqttPacketPubackReasonToReadonlyMqttPacketPubackReason(reason),
    properties: standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList(properties),
  });
}
