import { MQTT_PACKET_SERVER_REFERENCE_PROPERTY_NAME } from '../constants/mqtt-packet-server-reference-property-name.constant';
import { IMqttPacketServerReferenceProperty } from '../mqtt-packet-server-reference-property.type';
import { IStandardMqttPacketServerReferenceProperty } from './standard-mqtt-packet-server-reference-property.type';

export function mqttPacketServerReferencePropertyToStandardMqttPacketServerReferenceProperty(
  {
    getValue,
  }: IMqttPacketServerReferenceProperty,
): IStandardMqttPacketServerReferenceProperty {
  return {
    [MQTT_PACKET_SERVER_REFERENCE_PROPERTY_NAME]: getValue().toString(),
  };
}
