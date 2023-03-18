import { MQTT_PACKET_CORRELATION_DATA_PROPERTY_NAME } from '../constants/mqtt-packet-correlation-data-property-name.constant';
import { IMqttPacketCorrelationDataProperty } from '../mqtt-packet-correlation-data-property.type';
import { IStandardMqttPacketCorrelationDataProperty } from './standard-mqtt-packet-correlation-data-property.type';

export function mqttPacketCorrelationDataPropertyToStandardMqttPacketCorrelationDataProperty(
  {
    getValue,
  }: IMqttPacketCorrelationDataProperty,
): IStandardMqttPacketCorrelationDataProperty {
  return {
    [MQTT_PACKET_CORRELATION_DATA_PROPERTY_NAME]: getValue(),
  };
}
