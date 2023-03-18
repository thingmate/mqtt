import { MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_NAME } from '../constants/mqtt-packet-authentication-method-property-name.constant';
import { IMqttPacketAuthenticationMethodProperty } from '../mqtt-packet-authentication-method-property.type';
import { IStandardMqttPacketAuthenticationMethodProperty } from './standard-mqtt-packet-authentication-method-property.type';

export function mqttPacketAuthenticationMethodPropertyToStandardMqttPacketAuthenticationMethodProperty(
  {
    getValue,
  }: IMqttPacketAuthenticationMethodProperty,
): IStandardMqttPacketAuthenticationMethodProperty {
  return {
    [MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_NAME]: getValue().toString(),
  };
}
