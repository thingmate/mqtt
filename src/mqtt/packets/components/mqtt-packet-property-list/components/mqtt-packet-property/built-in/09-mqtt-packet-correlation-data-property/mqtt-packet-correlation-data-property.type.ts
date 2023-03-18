import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import { MQTT_PACKET_CORRELATION_DATA_PROPERTY_CODE } from './constants/mqtt-packet-correlation-data-property-code.constant';
import { MQTT_PACKET_CORRELATION_DATA_PROPERTY_NAME } from './constants/mqtt-packet-correlation-data-property-name.constant';

export type IMqttPacketCorrelationDataPropertyCode = typeof MQTT_PACKET_CORRELATION_DATA_PROPERTY_CODE;
export type IMqttPacketCorrelationDataPropertyName = typeof MQTT_PACKET_CORRELATION_DATA_PROPERTY_NAME;
export type IMqttPacketCorrelationDataPropertyValue = Uint8Array;

export interface IMqttPacketCorrelationDataProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketCorrelationDataPropertyCode, IMqttPacketCorrelationDataPropertyName, IMqttPacketCorrelationDataPropertyValue>
//
{

}

