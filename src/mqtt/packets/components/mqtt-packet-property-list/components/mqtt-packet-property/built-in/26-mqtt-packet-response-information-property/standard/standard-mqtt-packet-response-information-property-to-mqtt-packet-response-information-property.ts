import {
  createReadonlyStringBufferFromString,
} from '../../../../../../../../../classes/string-buffer/readonly/implementations/create-readonly-string-buffer-from-string';
import { MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_NAME } from '../constants/mqtt-packet-response-information-property-name.constant';
import { createMqttPacketResponseInformationProperty } from '../implementations/create-mqtt-packet-response-information-property';
import { IMqttPacketResponseInformationProperty } from '../mqtt-packet-response-information-property.type';
import { IStandardMqttPacketResponseInformationProperty } from './standard-mqtt-packet-response-information-property.type';

export function standardMqttPacketResponseInformationPropertyToMqttPacketResponseInformationProperty(
  input: IStandardMqttPacketResponseInformationProperty,
): IMqttPacketResponseInformationProperty {
  return createMqttPacketResponseInformationProperty(
    createReadonlyStringBufferFromString(input[MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_NAME]),
  );
}
