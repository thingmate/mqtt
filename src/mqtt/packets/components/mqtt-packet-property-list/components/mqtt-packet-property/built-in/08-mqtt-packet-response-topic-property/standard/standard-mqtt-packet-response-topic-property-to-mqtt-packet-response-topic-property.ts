import {
  createReadonlyStringBufferFromString,
} from '../../../../../../../../../classes/string-buffer/readonly/implementations/create-readonly-string-buffer-from-string';
import { MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_NAME } from '../constants/mqtt-packet-response-topic-property-name.constant';
import { createMqttPacketResponseTopicProperty } from '../implementations/create-mqtt-packet-response-topic-property';
import { IMqttPacketResponseTopicProperty } from '../mqtt-packet-response-topic-property.type';
import { IStandardMqttPacketResponseTopicProperty } from './standard-mqtt-packet-response-topic-property.type';

export function standardMqttPacketResponseTopicPropertyToMqttPacketResponseTopicProperty(
  input: IStandardMqttPacketResponseTopicProperty,
): IMqttPacketResponseTopicProperty {
  return createMqttPacketResponseTopicProperty(
    createReadonlyStringBufferFromString(input[MQTT_PACKET_RESPONSE_TOPIC_PROPERTY_NAME]),
  );
}
