import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import {
  MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_CODE,
} from '../constants/mqtt-packet-request-problem-information-property-code.constant';
import {
  MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_NAME,
} from '../constants/mqtt-packet-request-problem-information-property-name.constant';
import {
  IMqttPacketRequestProblemInformationProperty,
  IMqttPacketRequestProblemInformationPropertyCode,
  IMqttPacketRequestProblemInformationPropertyName,
  IMqttPacketRequestProblemInformationPropertyValue,
} from '../mqtt-packet-request-problem-information-property.type';

export function createMqttPacketRequestProblemInformationProperty(
  value: IMqttPacketRequestProblemInformationPropertyValue,
): IMqttPacketRequestProblemInformationProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketRequestProblemInformationPropertyCode, IMqttPacketRequestProblemInformationPropertyName, IMqttPacketRequestProblemInformationPropertyValue>({
    code: MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_CODE,
    name: MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_NAME,
    value,
  });
}

