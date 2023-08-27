import {
  readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/readonly-mqtt-packet-property-list-to-standard-mqtt-packet-property-list';
import {
  readonlyMqttPacketUnsubackReasonToStandardMqttPacketUnsubackReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/11-unsuback/standard/readonly-mqtt-packet-unsuback-reason-to-standard-mqtt-packet-unsuback-reason';
import { IReadonlyMqttUnsubackPacket } from '../readonly-mqtt-unsuback-packet.type';
import { IStandardMqttUnsubackPacket } from './standard-mqtt-unsuback-packet.type';

export function readonlyMqttUnsubackPacketToStandardMqttUnsubackPacket(
  {
    getType,
    getPacketId,
    getReason,
    getProperties,
  }: IReadonlyMqttUnsubackPacket,
): IStandardMqttUnsubackPacket {
  return {
    type: getType(),
    packetId: getPacketId().get(),
    reason: readonlyMqttPacketUnsubackReasonToStandardMqttPacketUnsubackReason(getReason()),
    properties: readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList(getProperties()),
  };
}
