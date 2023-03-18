import { MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_NAME } from '../constants/mqtt-packet-response-information-property-name.constant';
import { IMqttPacketResponseInformationProperty } from '../mqtt-packet-response-information-property.type';
import { IStandardMqttPacketResponseInformationProperty } from './standard-mqtt-packet-response-information-property.type';

export function mqttPacketResponseInformationPropertyToStandardMqttPacketResponseInformationProperty(
  {
    getValue,
  }: IMqttPacketResponseInformationProperty,
): IStandardMqttPacketResponseInformationProperty {
  return {
    [MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_NAME]: getValue().toString(),
  };
}
