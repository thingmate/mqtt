import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import {
  MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_CODE,
} from './constants/mqtt-packet-request-problem-information-property-code.constant';
import {
  MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_NAME,
} from './constants/mqtt-packet-request-problem-information-property-name.constant';

export type IMqttPacketRequestProblemInformationPropertyCode = typeof MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_CODE;
export type IMqttPacketRequestProblemInformationPropertyName = typeof MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_NAME;
export type IMqttPacketRequestProblemInformationPropertyValue = boolean;

export interface IMqttPacketRequestProblemInformationProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketRequestProblemInformationPropertyCode, IMqttPacketRequestProblemInformationPropertyName, IMqttPacketRequestProblemInformationPropertyValue>
//
{

}

