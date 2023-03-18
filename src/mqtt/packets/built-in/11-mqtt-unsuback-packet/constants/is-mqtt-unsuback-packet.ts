import { IGenericMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IReadonlyMqttUnsubackPacket } from '../readonly/readonly-mqtt-unsuback-packet.type';
import { MQTT_UNSUBACK_PACKET_TYPE } from './mqtt-unsuback-packet-type.constant';

export function isMqttUnsubackPacket(
  value: IGenericMqttPacket,
): value is IReadonlyMqttUnsubackPacket {
  return (value.getType() === MQTT_UNSUBACK_PACKET_TYPE);
}
