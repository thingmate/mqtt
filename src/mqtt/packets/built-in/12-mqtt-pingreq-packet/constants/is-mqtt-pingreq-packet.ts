import { IGenericMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IMqttPingreqPacket } from '../mqtt-pingreq-packet.type';
import { MQTT_PINGREQ_PACKET_TYPE } from './mqtt-pingreq-packet-type.constant';

export function isMqttPingreqPacket(
  value: IGenericMqttPacket,
): value is IMqttPingreqPacket {
  return (value.getType() === MQTT_PINGREQ_PACKET_TYPE);
}
