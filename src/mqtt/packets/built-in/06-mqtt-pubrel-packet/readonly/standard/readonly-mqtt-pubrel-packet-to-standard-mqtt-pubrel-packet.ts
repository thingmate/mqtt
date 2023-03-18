import {
  readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/readonly-mqtt-packet-property-list-to-standard-mqtt-packet-property-list';
import {
  readonlyMqttPacketPubrelReasonToStandardMqttPacketPubrelReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/06-pubrel/standard/readonly-mqtt-packet-pubrel-reason-to-standard-mqtt-packet-pubrel-reason';
import { IReadonlyMqttPubrelPacket } from '../readonly-mqtt-pubrel-packet.type';
import { IStandardMqttPubrelPacket } from './standard-mqtt-pubrel-packet.type';

export function readonlyMqttPubrelPacketToStandardMqttPubrelPacket(
  {
    getType,
    getPacketId,
    getReason,
    getProperties,
  }: IReadonlyMqttPubrelPacket,
): IStandardMqttPubrelPacket {
  return {
    type: getType(),
    packetId: getPacketId().get(),
    reason: readonlyMqttPacketPubrelReasonToStandardMqttPacketPubrelReason(getReason()),
    properties: readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList(getProperties()),
  };
}
