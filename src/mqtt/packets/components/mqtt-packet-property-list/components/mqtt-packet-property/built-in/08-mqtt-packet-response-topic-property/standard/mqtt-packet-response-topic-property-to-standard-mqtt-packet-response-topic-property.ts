import { MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_NAME } from '../constants/mqtt-packet-response-topic-property-name.constant';
import { IMqttPacketResponseTopicProperty } from '../mqtt-packet-response-topic-property.type';
import { IStandardMqttPacketResponseTopicProperty } from './standard-mqtt-packet-response-topic-property.type';

export function mqttPacketResponseTopicPropertyToStandardMqttPacketResponseTopicProperty(
  {
    getValue,
  }: IMqttPacketResponseTopicProperty,
): IStandardMqttPacketResponseTopicProperty {
  return {
    [MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_NAME]: getValue().toString(),
  };
}
