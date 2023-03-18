import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import { MQTT_PACKET_TOPIC_ALIAS_PROPERTY_CODE } from '../constants/mqtt-packet-topic-alias-property-code.constant';
import { MQTT_PACKET_TOPIC_ALIAS_PROPERTY_NAME } from '../constants/mqtt-packet-topic-alias-property-name.constant';
import {
  IMqttPacketTopicAliasProperty,
  IMqttPacketTopicAliasPropertyCode,
  IMqttPacketTopicAliasPropertyName,
  IMqttPacketTopicAliasPropertyValue,
} from '../mqtt-packet-topic-alias-property.type';

export function createMqttPacketTopicAliasProperty(
  value: IMqttPacketTopicAliasPropertyValue,
): IMqttPacketTopicAliasProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketTopicAliasPropertyCode, IMqttPacketTopicAliasPropertyName, IMqttPacketTopicAliasPropertyValue>({
    code: MQTT_PACKET_TOPIC_ALIAS_PROPERTY_CODE,
    name: MQTT_PACKET_TOPIC_ALIAS_PROPERTY_NAME,
    value,
  });
}

