import { MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_NAME } from '../constants/mqtt-packet-authentication-data-property-name.constant';
import { createMqttPacketAuthenticationDataProperty } from '../implementations/create-mqtt-packet-authentication-data-property';
import { IMqttPacketAuthenticationDataProperty } from '../mqtt-packet-authentication-data-property.type';
import { IStandardMqttPacketAuthenticationDataProperty } from './standard-mqtt-packet-authentication-data-property.type';

export function standardMqttPacketAuthenticationDataPropertyToMqttPacketAuthenticationDataProperty(
  input: IStandardMqttPacketAuthenticationDataProperty,
): IMqttPacketAuthenticationDataProperty {
  return createMqttPacketAuthenticationDataProperty(
    input[MQTT_PACKET_AUTHENTICATION_DATA_PROPERTY_NAME],
  );
}
