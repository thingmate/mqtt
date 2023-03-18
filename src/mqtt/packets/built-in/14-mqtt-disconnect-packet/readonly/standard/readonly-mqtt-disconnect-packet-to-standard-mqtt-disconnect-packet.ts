import {
  readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/readonly-mqtt-packet-property-list-to-standard-mqtt-packet-property-list';
import {
  readonlyMqttPacketDisconnectReasonToStandardMqttPacketDisconnectReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/14-disconnect/standard/readonly-mqtt-packet-disconnect-reason-to-standard-mqtt-packet-disconnect-reason';
import { IReadonlyMqttDisconnectPacket } from '../readonly-mqtt-disconnect-packet.type';
import { IStandardMqttDisconnectPacket } from './standard-mqtt-disconnect-packet.type';

export function readonlyMqttDisconnectPacketToStandardMqttDisconnectPacket(
  {
    getType,
    getReason,
    getProperties,
  }: IReadonlyMqttDisconnectPacket,
): IStandardMqttDisconnectPacket {
  return {
    type: getType(),
    reason: readonlyMqttPacketDisconnectReasonToStandardMqttPacketDisconnectReason(getReason()),
    properties: readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList(getProperties()),
  };
}
