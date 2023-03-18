import { IGenericMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IReadonlyMqttPubrelPacket } from '../readonly/readonly-mqtt-pubrel-packet.type';
import { MQTT_PUBREL_PACKET_TYPE } from './mqtt-pubrel-packet-type.constant';

export function isMqttPubrelPacket(
  value: IGenericMqttPacket,
): value is IReadonlyMqttPubrelPacket {
  return (value.getType() === MQTT_PUBREL_PACKET_TYPE);
}
