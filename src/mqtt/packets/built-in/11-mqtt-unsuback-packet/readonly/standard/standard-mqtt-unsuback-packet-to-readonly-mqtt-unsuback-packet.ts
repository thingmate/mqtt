import {
  createReadonlyMqttPacketIdFromNumber,
} from '../../../../components/mqtt-packet-id/readonly/implementations/create-readonly-mqtt-packet-id-from-number';
import {
  standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/standard-mqtt-packet-property-list-to-readonly-mqtt-packet-property-list';
import {
  standardMqttPacketUnsubackReasonToReadonlyMqttPacketUnsubackReason
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/11-unsuback/standard/standard-mqtt-packet-unsuback-reason-to-readonly-mqtt-packet-unsuback-reason';
import { createReadonlyMqttUnsubackPacket } from '../implementations/create-readonly-mqtt-unsuback-packet';
import { IReadonlyMqttUnsubackPacket } from '../readonly-mqtt-unsuback-packet.type';
import { IStandardMqttUnsubackPacket } from './standard-mqtt-unsuback-packet.type';

export function standardMqttUnsubackPacketToReadonlyMqttUnsubackPacket(
  {
    packetId,
    reason,
    properties,
  }: Omit<IStandardMqttUnsubackPacket, 'type'>,
): IReadonlyMqttUnsubackPacket {
  return createReadonlyMqttUnsubackPacket({
    packetId: createReadonlyMqttPacketIdFromNumber(packetId),
    reason: standardMqttPacketUnsubackReasonToReadonlyMqttPacketUnsubackReason(reason),
    properties: standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList(properties),
  });
}
