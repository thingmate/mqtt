import { IGenericMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IMqttPingrespPacket } from '../mqtt-pingresp-packet.type';
import { MQTT_PINGRESP_PACKET_TYPE } from './mqtt-pingresp-packet-type.constant';

export function isMqttPingrespPacket(
  value: IGenericMqttPacket,
): value is IMqttPingrespPacket {
  return (value.getType() === MQTT_PINGRESP_PACKET_TYPE);
}
