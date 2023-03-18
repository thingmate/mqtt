import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import { MQTT_PACKET_CORRELATION_DATA_PROPERTY_CODE } from '../constants/mqtt-packet-correlation-data-property-code.constant';
import { MQTT_PACKET_CORRELATION_DATA_PROPERTY_NAME } from '../constants/mqtt-packet-correlation-data-property-name.constant';
import {
  IMqttPacketCorrelationDataProperty,
  IMqttPacketCorrelationDataPropertyCode,
  IMqttPacketCorrelationDataPropertyName,
  IMqttPacketCorrelationDataPropertyValue,
} from '../mqtt-packet-correlation-data-property.type';

export function createMqttPacketCorrelationDataProperty(
  value: IMqttPacketCorrelationDataPropertyValue,
): IMqttPacketCorrelationDataProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketCorrelationDataPropertyCode, IMqttPacketCorrelationDataPropertyName, IMqttPacketCorrelationDataPropertyValue>({
    code: MQTT_PACKET_CORRELATION_DATA_PROPERTY_CODE,
    name: MQTT_PACKET_CORRELATION_DATA_PROPERTY_NAME,
    value,
  });
}

