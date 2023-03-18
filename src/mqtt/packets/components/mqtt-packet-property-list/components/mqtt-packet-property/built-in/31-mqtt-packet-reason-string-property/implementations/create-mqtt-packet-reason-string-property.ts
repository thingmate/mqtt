import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import { MQTT_PACKET_REASON_STRING_PROPERTY_CODE } from '../constants/mqtt-packet-reason-string-property-code.constant';
import { MQTT_PACKET_REASON_STRING_PROPERTY_NAME } from '../constants/mqtt-packet-reason-string-property-name.constant';
import {
  IMqttPacketReasonStringProperty,
  IMqttPacketReasonStringPropertyCode,
  IMqttPacketReasonStringPropertyName,
  IMqttPacketReasonStringPropertyValue,
} from '../mqtt-packet-reason-string-property.type';

export function createMqttPacketReasonStringProperty(
  value: IMqttPacketReasonStringPropertyValue,
): IMqttPacketReasonStringProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketReasonStringPropertyCode, IMqttPacketReasonStringPropertyName, IMqttPacketReasonStringPropertyValue>({
    code: MQTT_PACKET_REASON_STRING_PROPERTY_CODE,
    name: MQTT_PACKET_REASON_STRING_PROPERTY_NAME,
    value,
  });
}

