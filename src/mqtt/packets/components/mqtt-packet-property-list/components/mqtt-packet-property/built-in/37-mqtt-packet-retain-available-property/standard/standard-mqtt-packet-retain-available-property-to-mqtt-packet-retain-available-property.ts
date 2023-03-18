import { MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_NAME } from '../constants/mqtt-packet-retain-available-property-name.constant';
import { createMqttPacketRetainAvailableProperty } from '../implementations/create-mqtt-packet-retain-available-property';
import { IMqttPacketRetainAvailableProperty } from '../mqtt-packet-retain-available-property.type';
import { IStandardMqttPacketRetainAvailableProperty } from './standard-mqtt-packet-retain-available-property.type';

export function standardMqttPacketRetainAvailablePropertyToMqttPacketRetainAvailableProperty(
  input: IStandardMqttPacketRetainAvailableProperty,
): IMqttPacketRetainAvailableProperty {
  return createMqttPacketRetainAvailableProperty(
    input[MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_NAME],
  );
}
