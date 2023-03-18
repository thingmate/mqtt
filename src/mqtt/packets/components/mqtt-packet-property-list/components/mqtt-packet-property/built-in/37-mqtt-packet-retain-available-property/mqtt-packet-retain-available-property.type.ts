import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import { MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_CODE } from './constants/mqtt-packet-retain-available-property-code.constant';
import { MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_NAME } from './constants/mqtt-packet-retain-available-property-name.constant';

export type IMqttPacketRetainAvailablePropertyCode = typeof MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_CODE;
export type IMqttPacketRetainAvailablePropertyName = typeof MQTT_PACKET_RETAIN_AVAILABLE_PROPERTY_NAME;
export type IMqttPacketRetainAvailablePropertyValue = boolean;

export interface IMqttPacketRetainAvailableProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketRetainAvailablePropertyCode, IMqttPacketRetainAvailablePropertyName, IMqttPacketRetainAvailablePropertyValue>
//
{

}

