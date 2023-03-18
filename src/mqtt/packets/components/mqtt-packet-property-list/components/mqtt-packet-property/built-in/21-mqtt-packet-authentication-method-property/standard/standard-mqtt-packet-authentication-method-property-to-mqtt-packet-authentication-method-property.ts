import {
  createReadonlyStringBufferFromString,
} from '../../../../../../../../../classes/string-buffer/readonly/implementations/create-readonly-string-buffer-from-string';
import { MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_NAME } from '../constants/mqtt-packet-authentication-method-property-name.constant';
import { createMqttPacketAuthenticationMethodProperty } from '../implementations/create-mqtt-packet-authentication-method-property';
import { IMqttPacketAuthenticationMethodProperty } from '../mqtt-packet-authentication-method-property.type';
import { IStandardMqttPacketAuthenticationMethodProperty } from './standard-mqtt-packet-authentication-method-property.type';

export function standardMqttPacketAuthenticationMethodPropertyToMqttPacketAuthenticationMethodProperty(
  input: IStandardMqttPacketAuthenticationMethodProperty,
): IMqttPacketAuthenticationMethodProperty {
  return createMqttPacketAuthenticationMethodProperty(
    createReadonlyStringBufferFromString(input[MQTT_PACKET_AUTHENTICATION_METHOD_PROPERTY_NAME]),
  );
}
