import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import {
  MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_CODE,
} from './constants/mqtt-packet-request-response-information-property-code.constant';
import {
  MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_NAME,
} from './constants/mqtt-packet-request-response-information-property-name.constant';

export type IMqttPacketRequestResponseInformationPropertyCode = typeof MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_CODE;
export type IMqttPacketRequestResponseInformationPropertyName = typeof MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_NAME;
export type IMqttPacketRequestResponseInformationPropertyValue = boolean;

export interface IMqttPacketRequestResponseInformationProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketRequestResponseInformationPropertyCode, IMqttPacketRequestResponseInformationPropertyName, IMqttPacketRequestResponseInformationPropertyValue>
//
{

}

