import {
  readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/readonly-mqtt-packet-property-list-to-standard-mqtt-packet-property-list';
import {
  readonlyMqttPacketConnackReasonToStandardMqttPacketConnackReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/02-connack/standard/readonly-mqtt-packet-connack-reason-to-standard-mqtt-packet-connack-reason';
import { IReadonlyMqttConnackPacket } from '../readonly-mqtt-connack-packet.type';
import { IStandardMqttConnackPacket } from './standard-mqtt-connack-packet.type';

export function readonlyMqttConnackPacketToStandardMqttConnackPacket(
  {
    getType,
    getSessionPresent,
    getReason,
    getProperties,
  }: IReadonlyMqttConnackPacket,
): IStandardMqttConnackPacket {
  return {
    type: getType(),
    sessionPresent: getSessionPresent(),
    reason: readonlyMqttPacketConnackReasonToStandardMqttPacketConnackReason(getReason()),
    properties: readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList(getProperties()),
  };
}
