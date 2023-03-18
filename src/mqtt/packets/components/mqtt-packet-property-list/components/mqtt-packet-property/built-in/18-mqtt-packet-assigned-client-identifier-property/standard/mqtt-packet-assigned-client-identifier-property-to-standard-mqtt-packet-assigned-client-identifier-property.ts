import {
  MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_NAME,
} from '../constants/mqtt-packet-assigned-client-identifier-property-name.constant';
import { IMqttPacketAssignedClientIdentifierProperty } from '../mqtt-packet-assigned-client-identifier-property.type';
import { IStandardMqttPacketAssignedClientIdentifierProperty } from './standard-mqtt-packet-assigned-client-identifier-property.type';

export function mqttPacketAssignedClientIdentifierPropertyToStandardMqttPacketAssignedClientIdentifierProperty(
  {
    getValue,
  }: IMqttPacketAssignedClientIdentifierProperty,
): IStandardMqttPacketAssignedClientIdentifierProperty {
  return {
    [MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_NAME]: getValue().toString(),
  };
}
