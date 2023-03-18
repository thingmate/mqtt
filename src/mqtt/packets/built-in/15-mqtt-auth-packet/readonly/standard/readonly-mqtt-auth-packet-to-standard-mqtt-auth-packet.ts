import {
  readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/readonly-mqtt-packet-property-list-to-standard-mqtt-packet-property-list';
import {
  readonlyMqttPacketAuthReasonToStandardMqttPacketAuthReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/15-auth/standard/readonly-mqtt-packet-auth-reason-to-standard-mqtt-packet-auth-reason';
import { IReadonlyMqttAuthPacket } from '../readonly-mqtt-auth-packet.type';
import { IStandardMqttAuthPacket } from './standard-mqtt-auth-packet.type';

export function readonlyMqttAuthPacketToStandardMqttAuthPacket(
  {
    getType,
    getReason,
    getProperties,
  }: IReadonlyMqttAuthPacket,
): IStandardMqttAuthPacket {
  return {
    type: getType(),
    reason: readonlyMqttPacketAuthReasonToStandardMqttPacketAuthReason(getReason()),
    properties: readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList(getProperties()),
  };
}
