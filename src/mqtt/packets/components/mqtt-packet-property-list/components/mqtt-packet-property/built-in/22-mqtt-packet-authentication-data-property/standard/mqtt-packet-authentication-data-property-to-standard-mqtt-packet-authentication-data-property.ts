import { MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_NAME } from '../constants/mqtt-packet-authentication-data-property-name.constant';
import { IMqttPacketAuthenticationDataProperty } from '../mqtt-packet-authentication-data-property.type';
import { IStandardMqttPacketAuthenticationDataProperty } from './standard-mqtt-packet-authentication-data-property.type';

export function mqttPacketAuthenticationDataPropertyToStandardMqttPacketAuthenticationDataProperty(
  {
    getValue,
  }: IMqttPacketAuthenticationDataProperty,
): IStandardMqttPacketAuthenticationDataProperty {
  return {
    [MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_NAME]: getValue(),
  };
}
