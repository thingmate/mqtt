import {
  readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/readonly-mqtt-packet-property-list-to-standard-mqtt-packet-property-list';
import {
  readonlyMqttPacketSubackReasonToStandardMqttPacketSubackReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/09-suback/standard/readonly-mqtt-packet-suback-reason-to-standard-mqtt-packet-suback-reason';

import { IReadonlyMqttSubackPacket } from '../readonly-mqtt-suback-packet.type';
import { IStandardMqttSubackPacket } from './standard-mqtt-suback-packet.type';

export function readonlyMqttSubackPacketToStandardMqttSubackPacket(
  {
    getType,
    getPacketId,
    getReasons,
    getProperties,
  }: IReadonlyMqttSubackPacket,
): IStandardMqttSubackPacket {
  return {
    type: getType(),
    packetId: getPacketId().get(),
    reasons: getReasons().map(readonlyMqttPacketSubackReasonToStandardMqttPacketSubackReason),
    properties: readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList(getProperties()),
  };
}
