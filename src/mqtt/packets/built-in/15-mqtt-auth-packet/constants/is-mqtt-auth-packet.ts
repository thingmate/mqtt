import { IGenericMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IReadonlyMqttAuthPacket } from '../readonly/readonly-mqtt-auth-packet.type';
import { MQTT_AUTH_PACKET_TYPE } from './mqtt-auth-packet-type.constant';

export function isMqttAuthPacket(
  value: IGenericMqttPacket,
): value is IReadonlyMqttAuthPacket {
  return (value.getType() === MQTT_AUTH_PACKET_TYPE);
}
