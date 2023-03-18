import {
  standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/standard-mqtt-packet-property-list-to-readonly-mqtt-packet-property-list';
import {
  standardMqttPacketConnackReasonToReadonlyMqttPacketConnackReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/02-connack/standard/standard-mqtt-packet-connack-reason-to-readonly-mqtt-packet-connack-reason';
import { createReadonlyMqttConnackPacket } from '../implementations/create-readonly-mqtt-connack-packet';
import { IReadonlyMqttConnackPacket } from '../readonly-mqtt-connack-packet.type';
import { IStandardMqttConnackPacket } from './standard-mqtt-connack-packet.type';

export function standardMqttConnackPacketToReadonlyMqttConnackPacket(
  {
    sessionPresent,
    reason,
    properties,
  }: Omit<IStandardMqttConnackPacket, 'type'>,
): IReadonlyMqttConnackPacket {
  return createReadonlyMqttConnackPacket({
    sessionPresent,
    reason: standardMqttPacketConnackReasonToReadonlyMqttPacketConnackReason(reason),
    properties: standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList(properties),
  });
}
