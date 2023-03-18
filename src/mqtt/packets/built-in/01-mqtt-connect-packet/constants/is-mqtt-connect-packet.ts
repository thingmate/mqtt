import { IGenericMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IReadonlyMqttConnectPacket } from '../readonly/readonly-mqtt-connect-packet.type';
import { MQTT_CONNECT_PACKET_TYPE } from './mqtt-connect-packet-type.constant';

export function isMqttConnectPacket(
  value: IGenericMqttPacket,
): value is IReadonlyMqttConnectPacket {
  return (value.getType() === MQTT_CONNECT_PACKET_TYPE);
}
