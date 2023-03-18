import {
  readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/readonly-mqtt-packet-property-list-to-standard-mqtt-packet-property-list';
import {
  readonlyMqttPacketPubcompReasonToStandardMqttPacketPubcompReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/07-pubcomp/standard/readonly-mqtt-packet-pubcomp-reason-to-standard-mqtt-packet-pubcomp-reason';
import { IReadonlyMqttPubcompPacket } from '../readonly-mqtt-pubcomp-packet.type';
import { IStandardMqttPubcompPacket } from './standard-mqtt-pubcomp-packet.type';

export function readonlyMqttPubcompPacketToStandardMqttPubcompPacket(
  {
    getType,
    getPacketId,
    getReason,
    getProperties,
  }: IReadonlyMqttPubcompPacket,
): IStandardMqttPubcompPacket {
  return {
    type: getType(),
    packetId: getPacketId().get(),
    reason: readonlyMqttPacketPubcompReasonToStandardMqttPacketPubcompReason(getReason()),
    properties: readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList(getProperties()),
  };
}
