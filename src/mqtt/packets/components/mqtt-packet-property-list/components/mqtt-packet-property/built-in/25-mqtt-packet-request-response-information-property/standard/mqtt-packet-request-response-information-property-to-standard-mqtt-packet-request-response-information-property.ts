import {
  MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_NAME,
} from '../constants/mqtt-packet-request-response-information-property-name.constant';
import { IMqttPacketRequestResponseInformationProperty } from '../mqtt-packet-request-response-information-property.type';
import { IStandardMqttPacketRequestResponseInformationProperty } from './standard-mqtt-packet-request-response-information-property.type';

export function mqttPacketRequestResponseInformationPropertyToStandardMqttPacketRequestResponseInformationProperty(
  {
    getValue,
  }: IMqttPacketRequestResponseInformationProperty,
): IStandardMqttPacketRequestResponseInformationProperty {
  return {
    [MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_NAME]: getValue(),
  };
}
