import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import { MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_CODE } from '../constants/mqtt-packet-topic-alias-maximum-property-code.constant';
import { MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_NAME } from '../constants/mqtt-packet-topic-alias-maximum-property-name.constant';
import {
  IMqttPacketTopicAliasMaximumProperty,
  IMqttPacketTopicAliasMaximumPropertyCode,
  IMqttPacketTopicAliasMaximumPropertyName,
  IMqttPacketTopicAliasMaximumPropertyValue,
} from '../mqtt-packet-topic-alias-maximum-property.type';

export function createMqttPacketTopicAliasMaximumProperty(
  value: IMqttPacketTopicAliasMaximumPropertyValue,
): IMqttPacketTopicAliasMaximumProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketTopicAliasMaximumPropertyCode, IMqttPacketTopicAliasMaximumPropertyName, IMqttPacketTopicAliasMaximumPropertyValue>({
    code: MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_CODE,
    name: MQTT_PACKET_TOPIC_ALIAS_MAXIMUM_PROPERTY_NAME,
    value,
  });
}

