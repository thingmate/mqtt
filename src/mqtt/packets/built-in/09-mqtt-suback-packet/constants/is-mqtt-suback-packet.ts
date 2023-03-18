import { IGenericMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IReadonlyMqttSubackPacket } from '../readonly/readonly-mqtt-suback-packet.type';
import { MQTT_SUBACK_PACKET_TYPE } from './mqtt-suback-packet-type.constant';

export function isMqttSubackPacket(
  value: IGenericMqttPacket,
): value is IReadonlyMqttSubackPacket {
  return (value.getType() === MQTT_SUBACK_PACKET_TYPE);
}
