import { IGenericMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IReadonlyMqttConnackPacket } from '../readonly/readonly-mqtt-connack-packet.type';
import { MQTT_CONNACK_PACKET_TYPE } from './mqtt-connack-packet-type.constant';

export function isMqttConnackPacket(
  value: IGenericMqttPacket,
): value is IReadonlyMqttConnackPacket {
  return (value.getType() === MQTT_CONNACK_PACKET_TYPE);
}
