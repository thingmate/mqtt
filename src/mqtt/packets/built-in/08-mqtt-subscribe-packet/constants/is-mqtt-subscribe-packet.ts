import { IGenericMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IReadonlyMqttSubscribePacket } from '../readonly/readonly-mqtt-subscribe-packet.type';
import { MQTT_SUBSCRIBE_PACKET_TYPE } from './mqtt-subscribe-packet-type.constant';

export function isMqttSubscribePacket(
  value: IGenericMqttPacket,
): value is IReadonlyMqttSubscribePacket {
  return (value.getType() === MQTT_SUBSCRIBE_PACKET_TYPE);
}
