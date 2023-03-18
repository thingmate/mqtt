import {
  standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/standard-mqtt-packet-property-list-to-readonly-mqtt-packet-property-list';
import {
  standardMqttPacketAuthReasonToReadonlyMqttPacketAuthReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/15-auth/standard/standard-mqtt-packet-auth-reason-to-readonly-mqtt-packet-auth-reason';
import { createReadonlyMqttAuthPacket } from '../implementations/create-readonly-mqtt-auth-packet';
import { IReadonlyMqttAuthPacket } from '../readonly-mqtt-auth-packet.type';
import { IStandardMqttAuthPacket } from './standard-mqtt-auth-packet.type';

export function standardMqttAuthPacketToReadonlyMqttAuthPacket(
  {
    reason,
    properties,
  }: Omit<IStandardMqttAuthPacket, 'type'>,
): IReadonlyMqttAuthPacket {
  return createReadonlyMqttAuthPacket({
    reason: standardMqttPacketAuthReasonToReadonlyMqttPacketAuthReason(reason),
    properties: standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList(properties),
  });
}
