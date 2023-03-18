import {
  mqttPacketUserPropertyToStandardMqttPacketUserPropertyType,
} from '../components/mqtt-packet-user-property-entry/standard/mqtt-packet-user-property-entry-to-standard-mqtt-packet-user-property-entry';
import { IMqttPacketUserProperty } from '../mqtt-packet-user-property.type';
import { STANDARD_MQTT_PACKET_USER_PROPERTY_NAME } from './standard-mqtt-packet-user-properties-name.constant';
import { IStandardMqttPacketUserProperties } from './standard-mqtt-packet-user-properties.type';

export function mqttPacketUserPropertyToStandardMqttPacketUserProperties(
  input: IMqttPacketUserProperty,
): IStandardMqttPacketUserProperties {
  return {
    [STANDARD_MQTT_PACKET_USER_PROPERTY_NAME]: mqttPacketUserPropertyToStandardMqttPacketUserPropertyType(input.getValue()),
  };
}
