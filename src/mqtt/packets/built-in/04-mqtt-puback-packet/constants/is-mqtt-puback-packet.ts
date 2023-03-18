import { IGenericMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IReadonlyMqttPubackPacket } from '../readonly/readonly-mqtt-puback-packet.type';
import { MQTT_PUBACK_PACKET_TYPE } from './mqtt-puback-packet-type.constant';

export function isMqttPubackPacket(
  value: IGenericMqttPacket,
): value is IReadonlyMqttPubackPacket {
  return (value.getType() === MQTT_PUBACK_PACKET_TYPE);
}
