import { IGenericMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IReadonlyMqttPubcompPacket } from '../readonly/readonly-mqtt-pubcomp-packet.type';
import { MQTT_PUBCOMP_PACKET_TYPE } from './mqtt-pubcomp-packet-type.constant';

export function isMqttPubcompPacket(
  value: IGenericMqttPacket,
): value is IReadonlyMqttPubcompPacket {
  return (value.getType() === MQTT_PUBCOMP_PACKET_TYPE);
}
