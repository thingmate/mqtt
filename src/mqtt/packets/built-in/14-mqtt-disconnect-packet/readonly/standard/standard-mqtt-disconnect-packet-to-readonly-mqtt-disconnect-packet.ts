import {
  standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/standard-mqtt-packet-property-list-to-readonly-mqtt-packet-property-list';
import {
  standardMqttPacketDisconnectReasonToReadonlyMqttPacketDisconnectReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/14-disconnect/standard/standard-mqtt-packet-disconnect-reason-to-readonly-mqtt-packet-disconnect-reason';
import { createReadonlyMqttDisconnectPacket } from '../implementations/create-readonly-mqtt-disconnect-packet';
import { IReadonlyMqttDisconnectPacket } from '../readonly-mqtt-disconnect-packet.type';
import { IStandardMqttDisconnectPacket } from './standard-mqtt-disconnect-packet.type';

export function standardMqttDisconnectPacketToReadonlyMqttDisconnectPacket(
  {
    reason,
    properties,
  }: Omit<IStandardMqttDisconnectPacket, 'type'>,
): IReadonlyMqttDisconnectPacket {
  return createReadonlyMqttDisconnectPacket({
    reason: standardMqttPacketDisconnectReasonToReadonlyMqttPacketDisconnectReason(reason),
    properties: standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList(properties),
  });
}
