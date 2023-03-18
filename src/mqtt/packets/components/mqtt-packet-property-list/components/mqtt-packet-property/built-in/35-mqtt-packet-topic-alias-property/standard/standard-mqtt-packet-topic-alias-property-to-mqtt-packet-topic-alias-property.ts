import { MQTT_PACKET_TOPIC_ALIAS_PROPERTY_NAME } from '../constants/mqtt-packet-topic-alias-property-name.constant';
import { createMqttPacketTopicAliasProperty } from '../implementations/create-mqtt-packet-topic-alias-property';
import { IMqttPacketTopicAliasProperty } from '../mqtt-packet-topic-alias-property.type';
import { IStandardMqttPacketTopicAliasProperty } from './standard-mqtt-packet-topic-alias-property.type';

export function standardMqttPacketTopicAliasPropertyToMqttPacketTopicAliasProperty(
  input: IStandardMqttPacketTopicAliasProperty,
): IMqttPacketTopicAliasProperty {
  return createMqttPacketTopicAliasProperty(
    input[MQTT_PACKET_TOPIC_ALIAS_PROPERTY_NAME],
  );
}
