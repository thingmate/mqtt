import { IGenericMqttPacket } from '../../../components/mqtt-packet/mqtt-packet.type';
import { IReadonlyMqttPublishPacket } from '../readonly/readonly-mqtt-publish-packet.type';
import { MQTT_PUBLISH_PACKET_TYPE } from './mqtt-publish-packet-type.constant';

export function isMqttPublishPacket(
  value: IGenericMqttPacket,
): value is IReadonlyMqttPublishPacket {
  return (value.getType() === MQTT_PUBLISH_PACKET_TYPE);
}
