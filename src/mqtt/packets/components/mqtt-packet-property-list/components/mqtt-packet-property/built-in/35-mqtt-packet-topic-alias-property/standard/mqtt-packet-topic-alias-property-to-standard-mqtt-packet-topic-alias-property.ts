import { MQTT_PACKET_TOPIC_ALIAS_PROPERTY_NAME } from '../constants/mqtt-packet-topic-alias-property-name.constant';
import { IMqttPacketTopicAliasProperty } from '../mqtt-packet-topic-alias-property.type';
import { IStandardMqttPacketTopicAliasProperty } from './standard-mqtt-packet-topic-alias-property.type';

export function mqttPacketTopicAliasPropertyToStandardMqttPacketTopicAliasProperty(
  {
    getValue,
  }: IMqttPacketTopicAliasProperty,
): IStandardMqttPacketTopicAliasProperty {
  return {
    [MQTT_PACKET_TOPIC_ALIAS_PROPERTY_NAME]: getValue(),
  };
}
