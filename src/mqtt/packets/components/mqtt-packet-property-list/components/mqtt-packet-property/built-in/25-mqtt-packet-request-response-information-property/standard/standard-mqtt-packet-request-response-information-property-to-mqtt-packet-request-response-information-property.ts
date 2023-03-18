import {
  MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_NAME,
} from '../constants/mqtt-packet-request-response-information-property-name.constant';
import {
  createMqttPacketRequestResponseInformationProperty,
} from '../implementations/create-mqtt-packet-request-response-information-property';
import { IMqttPacketRequestResponseInformationProperty } from '../mqtt-packet-request-response-information-property.type';
import { IStandardMqttPacketRequestResponseInformationProperty } from './standard-mqtt-packet-request-response-information-property.type';

export function standardMqttPacketRequestResponseInformationPropertyToMqttPacketRequestResponseInformationProperty(
  input: IStandardMqttPacketRequestResponseInformationProperty,
): IMqttPacketRequestResponseInformationProperty {
  return createMqttPacketRequestResponseInformationProperty(
    input[MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_NAME],
  );
}
