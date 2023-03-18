import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import { MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_CODE } from '../constants/mqtt-packet-subscription-identifier-property-code.constant';
import { MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_NAME } from '../constants/mqtt-packet-subscription-identifier-property-name.constant';
import {
  IMqttPacketSubscriptionIdentifierProperty,
  IMqttPacketSubscriptionIdentifierPropertyCode,
  IMqttPacketSubscriptionIdentifierPropertyName,
  IMqttPacketSubscriptionIdentifierPropertyValue,
} from '../mqtt-packet-subscription-identifier-property.type';

export function createMqttPacketSubscriptionIdentifierProperty(
  value: IMqttPacketSubscriptionIdentifierPropertyValue,
): IMqttPacketSubscriptionIdentifierProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketSubscriptionIdentifierPropertyCode, IMqttPacketSubscriptionIdentifierPropertyName, IMqttPacketSubscriptionIdentifierPropertyValue>({
    code: MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_CODE,
    name: MQTT_PACKET_SUBSCRIPTION_IDENTIFIER_PROPERTY_NAME,
    value,
  });
}

