import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import { MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_CODE } from '../constants/mqtt-packet-authentication-method-property-code.constant';
import { MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_NAME } from '../constants/mqtt-packet-authentication-method-property-name.constant';
import {
  IMqttPacketAuthenticationMethodProperty,
  IMqttPacketAuthenticationMethodPropertyCode,
  IMqttPacketAuthenticationMethodPropertyName,
  IMqttPacketAuthenticationMethodPropertyValue,
} from '../mqtt-packet-authentication-method-property.type';

export function createMqttPacketAuthenticationMethodProperty(
  value: IMqttPacketAuthenticationMethodPropertyValue,
): IMqttPacketAuthenticationMethodProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketAuthenticationMethodPropertyCode, IMqttPacketAuthenticationMethodPropertyName, IMqttPacketAuthenticationMethodPropertyValue>({
    code: MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_CODE,
    name: MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_NAME,
    value,
  });
}

