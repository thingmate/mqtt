import {
  MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_NAME,
} from '../constants/mqtt-packet-request-problem-information-property-name.constant';
import {
  createMqttPacketRequestProblemInformationProperty,
} from '../implementations/create-mqtt-packet-request-problem-information-property';
import { IMqttPacketRequestProblemInformationProperty } from '../mqtt-packet-request-problem-information-property.type';
import { IStandardMqttPacketRequestProblemInformationProperty } from './standard-mqtt-packet-request-problem-information-property.type';

export function standardMqttPacketRequestProblemInformationPropertyToMqttPacketRequestProblemInformationProperty(
  input: IStandardMqttPacketRequestProblemInformationProperty,
): IMqttPacketRequestProblemInformationProperty {
  return createMqttPacketRequestProblemInformationProperty(
    input[MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_NAME],
  );
}
