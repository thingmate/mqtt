import { MQTT_PACKET_CORRELATION_DATA_PROPERTY_NAME } from '../constants/mqtt-packet-correlation-data-property-name.constant';
import { createMqttPacketCorrelationDataProperty } from '../implementations/create-mqtt-packet-correlation-data-property';
import { IMqttPacketCorrelationDataProperty } from '../mqtt-packet-correlation-data-property.type';
import { IStandardMqttPacketCorrelationDataProperty } from './standard-mqtt-packet-correlation-data-property.type';

export function standardMqttPacketCorrelationDataPropertyToMqttPacketCorrelationDataProperty(
  input: IStandardMqttPacketCorrelationDataProperty,
): IMqttPacketCorrelationDataProperty {
  return createMqttPacketCorrelationDataProperty(
    input[MQTT_PACKET_CORRELATION_DATA_PROPERTY_NAME],
  );
}
