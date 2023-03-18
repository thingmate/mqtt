import { IGenericMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IReadonlyMqttDisconnectPacket } from '../readonly/readonly-mqtt-disconnect-packet.type';
import { MQTT_DISCONNECT_PACKET_TYPE } from './mqtt-disconnect-packet-type.constant';

export function isMqttDisconnectPacket(
  value: IGenericMqttPacket,
): value is IReadonlyMqttDisconnectPacket {
  return (value.getType() === MQTT_DISCONNECT_PACKET_TYPE);
}
