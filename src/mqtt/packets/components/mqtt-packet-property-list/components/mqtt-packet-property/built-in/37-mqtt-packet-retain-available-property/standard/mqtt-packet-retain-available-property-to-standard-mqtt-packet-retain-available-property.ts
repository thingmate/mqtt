import { MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_NAME } from '../constants/mqtt-packet-retain-available-property-name.constant';
import { IMqttPacketRetainAvailableProperty } from '../mqtt-packet-retain-available-property.type';
import { IStandardMqttPacketRetainAvailableProperty } from './standard-mqtt-packet-retain-available-property.type';

export function mqttPacketRetainAvailablePropertyToStandardMqttPacketRetainAvailableProperty(
  {
    getValue,
  }: IMqttPacketRetainAvailableProperty,
): IStandardMqttPacketRetainAvailableProperty {
  return {
    [MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_NAME]: getValue(),
  };
}
