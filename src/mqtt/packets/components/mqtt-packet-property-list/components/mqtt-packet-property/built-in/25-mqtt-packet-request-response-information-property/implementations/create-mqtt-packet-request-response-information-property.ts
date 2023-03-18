import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import {
  MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_CODE,
} from '../constants/mqtt-packet-request-response-information-property-code.constant';
import {
  MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_NAME,
} from '../constants/mqtt-packet-request-response-information-property-name.constant';
import {
  IMqttPacketRequestResponseInformationProperty,
  IMqttPacketRequestResponseInformationPropertyCode,
  IMqttPacketRequestResponseInformationPropertyName,
  IMqttPacketRequestResponseInformationPropertyValue,
} from '../mqtt-packet-request-response-information-property.type';

export function createMqttPacketRequestResponseInformationProperty(
  value: IMqttPacketRequestResponseInformationPropertyValue,
): IMqttPacketRequestResponseInformationProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketRequestResponseInformationPropertyCode, IMqttPacketRequestResponseInformationPropertyName, IMqttPacketRequestResponseInformationPropertyValue>({
    code: MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_CODE,
    name: MQTT_PACKET_REQUEST_RESPONSE_INFORMATION_PROPERTY_NAME,
    value,
  });
}

