import {
  MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_NAME,
} from '../constants/mqtt-packet-request-problem-information-property-name.constant';
import { IMqttPacketRequestProblemInformationProperty } from '../mqtt-packet-request-problem-information-property.type';
import { IStandardMqttPacketRequestProblemInformationProperty } from './standard-mqtt-packet-request-problem-information-property.type';

export function mqttPacketRequestProblemInformationPropertyToStandardMqttPacketRequestProblemInformationProperty(
  {
    getValue,
  }: IMqttPacketRequestProblemInformationProperty,
): IStandardMqttPacketRequestProblemInformationProperty {
  return {
    [MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_NAME]: getValue(),
  };
}
