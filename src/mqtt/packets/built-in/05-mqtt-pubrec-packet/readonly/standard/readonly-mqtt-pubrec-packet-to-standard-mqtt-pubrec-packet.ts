import {
  readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/readonly-mqtt-packet-property-list-to-standard-mqtt-packet-property-list';
import {
  readonlyMqttPacketPubrecReasonToStandardMqttPacketPubrecReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/05-pubrec/standard/readonly-mqtt-packet-pubrec-reason-to-standard-mqtt-packet-pubrec-reason';
import { IReadonlyMqttPubrecPacket } from '../readonly-mqtt-pubrec-packet.type';
import { IStandardMqttPubrecPacket } from './standard-mqtt-pubrec-packet.type';

export function readonlyMqttPubrecPacketToStandardMqttPubrecPacket(
  {
    getType,
    getPacketId,
    getReason,
    getProperties,
  }: IReadonlyMqttPubrecPacket,
): IStandardMqttPubrecPacket {
  return {
    type: getType(),
    packetId: getPacketId().get(),
    reason: readonlyMqttPacketPubrecReasonToStandardMqttPacketPubrecReason(getReason()),
    properties: readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList(getProperties()),
  };
}
