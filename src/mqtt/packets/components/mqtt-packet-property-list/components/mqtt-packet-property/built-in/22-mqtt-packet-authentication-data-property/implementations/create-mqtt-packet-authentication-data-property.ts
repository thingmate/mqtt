import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import { MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_CODE } from '../constants/mqtt-packet-authentication-data-property-code.constant';
import { MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_NAME } from '../constants/mqtt-packet-authentication-data-property-name.constant';
import {
  IMqttPacketAuthenticationDataProperty,
  IMqttPacketAuthenticationDataPropertyCode,
  IMqttPacketAuthenticationDataPropertyName,
  IMqttPacketAuthenticationDataPropertyValue,
} from '../mqtt-packet-authentication-data-property.type';

export function createMqttPacketAuthenticationDataProperty(
  value: IMqttPacketAuthenticationDataPropertyValue,
): IMqttPacketAuthenticationDataProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketAuthenticationDataPropertyCode, IMqttPacketAuthenticationDataPropertyName, IMqttPacketAuthenticationDataPropertyValue>({
    code: MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_CODE,
    name: MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_NAME,
    value,
  });
}

