import { MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_NAME } from '../constants/mqtt-packet-maximum-packet-size-property-name.constant';
import { IMqttPacketMaximumPacketSizeProperty } from '../mqtt-packet-maximum-packet-size-property.type';
import { IStandardMqttPacketMaximumPacketSizeProperty } from './standard-mqtt-packet-maximum-packet-size-property.type';

export function mqttPacketMaximumPacketSizePropertyToStandardMqttPacketMaximumPacketSizeProperty(
  {
    getValue,
  }: IMqttPacketMaximumPacketSizeProperty,
): IStandardMqttPacketMaximumPacketSizeProperty {
  return {
    [MQTT_PACKET_MAXIMUM_PACKET_SIZE_PROPERTY_NAME]: getValue(),
  };
}
