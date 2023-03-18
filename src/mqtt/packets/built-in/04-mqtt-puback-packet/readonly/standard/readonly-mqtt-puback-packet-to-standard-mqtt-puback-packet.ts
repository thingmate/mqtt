import {
  readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/readonly-mqtt-packet-property-list-to-standard-mqtt-packet-property-list';
import {
  readonlyMqttPacketPubackReasonToStandardMqttPacketPubackReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/04-puback/standard/readonly-mqtt-packet-puback-reason-to-standard-mqtt-packet-puback-reason';
import { IReadonlyMqttPubackPacket } from '../readonly-mqtt-puback-packet.type';
import { IStandardMqttPubackPacket } from './standard-mqtt-puback-packet.type';

export function readonlyMqttPubackPacketToStandardMqttPubackPacket(
  {
    getType,
    getPacketId,
    getReason,
    getProperties,
  }: IReadonlyMqttPubackPacket,
): IStandardMqttPubackPacket {
  return {
    type: getType(),
    packetId: getPacketId().get(),
    reason: readonlyMqttPacketPubackReasonToStandardMqttPacketPubackReason(getReason()),
    properties: readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList(getProperties()),
  };
}
