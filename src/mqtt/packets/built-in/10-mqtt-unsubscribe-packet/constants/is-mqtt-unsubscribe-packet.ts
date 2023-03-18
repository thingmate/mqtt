import { IGenericMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IReadonlyMqttUnsubscribePacket } from '../readonly/readonly-mqtt-unsubscribe-packet.type';
import { MQTT_UNSUBSCRIBE_PACKET_TYPE } from './mqtt-unsubscribe-packet-type.constant';

export function isMqttUnsubscribePacket(
  value: IGenericMqttPacket,
): value is IReadonlyMqttUnsubscribePacket {
  return (value.getType() === MQTT_UNSUBSCRIBE_PACKET_TYPE);
}
