import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import { MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_CODE } from '../constants/mqtt-packet-response-information-property-code.constant';
import { MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_NAME } from '../constants/mqtt-packet-response-information-property-name.constant';
import {
  IMqttPacketResponseInformationProperty,
  IMqttPacketResponseInformationPropertyCode,
  IMqttPacketResponseInformationPropertyName,
  IMqttPacketResponseInformationPropertyValue,
} from '../mqtt-packet-response-information-property.type';

export function createMqttPacketResponseInformationProperty(
  value: IMqttPacketResponseInformationPropertyValue,
): IMqttPacketResponseInformationProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketResponseInformationPropertyCode, IMqttPacketResponseInformationPropertyName, IMqttPacketResponseInformationPropertyValue>({
    code: MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_CODE,
    name: MQTT_PACKET_RESPONSE_INFORMATION_PROPERTY_NAME,
    value,
  });
}

