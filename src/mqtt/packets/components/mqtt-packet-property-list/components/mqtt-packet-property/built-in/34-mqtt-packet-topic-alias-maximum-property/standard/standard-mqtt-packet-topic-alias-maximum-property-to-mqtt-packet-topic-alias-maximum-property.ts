import { MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_NAME } from '../constants/mqtt-packet-topic-alias-maximum-property-name.constant';
import { createMqttPacketTopicAliasMaximumProperty } from '../implementations/create-mqtt-packet-topic-alias-maximum-property';
import { IMqttPacketTopicAliasMaximumProperty } from '../mqtt-packet-topic-alias-maximum-property.type';
import { IStandardMqttPacketTopicAliasMaximumProperty } from './standard-mqtt-packet-topic-alias-maximum-property.type';

export function standardMqttPacketTopicAliasMaximumPropertyToMqttPacketTopicAliasMaximumProperty(
  input: IStandardMqttPacketTopicAliasMaximumProperty,
): IMqttPacketTopicAliasMaximumProperty {
  return createMqttPacketTopicAliasMaximumProperty(
    input[MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_NAME],
  );
}
