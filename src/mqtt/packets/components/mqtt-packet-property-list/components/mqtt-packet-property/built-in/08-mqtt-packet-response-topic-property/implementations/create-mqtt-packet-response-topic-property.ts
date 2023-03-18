import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import { MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_CODE } from '../constants/mqtt-packet-response-topic-property-code.constant';
import { MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_NAME } from '../constants/mqtt-packet-response-topic-property-name.constant';
import {
  IMqttPacketResponseTopicProperty,
  IMqttPacketResponseTopicPropertyCode,
  IMqttPacketResponseTopicPropertyName,
  IMqttPacketResponseTopicPropertyValue,
} from '../mqtt-packet-response-topic-property.type';

export function createMqttPacketResponseTopicProperty(
  value: IMqttPacketResponseTopicPropertyValue,
): IMqttPacketResponseTopicProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketResponseTopicPropertyCode, IMqttPacketResponseTopicPropertyName, IMqttPacketResponseTopicPropertyValue>({
    code: MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_CODE,
    name: MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_NAME,
    value,
  });
}

