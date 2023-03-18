import { MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_NAME } from '../constants/mqtt-packet-topic-alias-maximum-property-name.constant';
import { IMqttPacketTopicAliasMaximumProperty } from '../mqtt-packet-topic-alias-maximum-property.type';
import { IStandardMqttPacketTopicAliasMaximumProperty } from './standard-mqtt-packet-topic-alias-maximum-property.type';

export function mqttPacketTopicAliasMaximumPropertyToStandardMqttPacketTopicAliasMaximumProperty(
  {
    getValue,
  }: IMqttPacketTopicAliasMaximumProperty,
): IStandardMqttPacketTopicAliasMaximumProperty {
  return {
    [MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_NAME]: getValue(),
  };
}
