import { MQTT_PACKET_CONTENT_TYPE_PROPERTY_NAME } from '../constants/mqtt-packet-content-type-property-name.constant';
import { IMqttPacketContentTypeProperty } from '../mqtt-packet-content-type-property.type';
import { IStandardMqttPacketContentTypeProperty } from './standard-mqtt-packet-content-type-property.type';

export function mqttPacketContentTypePropertyToStandardMqttPacketContentTypeProperty(
  {
    getValue,
  }: IMqttPacketContentTypeProperty,
): IStandardMqttPacketContentTypeProperty {
  return {
    [MQTT_PACKET_CONTENT_TYPE_PROPERTY_NAME]: getValue().toString(),
  };
}
