import { IGenericMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IReadonlyMqttPubrecPacket } from '../readonly/readonly-mqtt-pubrec-packet.type';
import { MQTT_PUBREC_PACKET_TYPE } from './mqtt-pubrec-packet-type.constant';

export function isMqttPubrecPacket(
  value: IGenericMqttPacket,
): value is IReadonlyMqttPubrecPacket {
  return (value.getType() === MQTT_PUBREC_PACKET_TYPE);
}
