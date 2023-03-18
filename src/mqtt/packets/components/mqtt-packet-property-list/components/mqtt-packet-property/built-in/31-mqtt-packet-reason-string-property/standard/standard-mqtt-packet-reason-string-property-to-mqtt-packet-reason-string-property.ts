import {
  createReadonlyStringBufferFromString,
} from '../../../../../../../../../classes/string-buffer/readonly/implementations/create-readonly-string-buffer-from-string';
import { MQTT_PACKET_REASON_STRING_PROPERTY_NAME } from '../constants/mqtt-packet-reason-string-property-name.constant';
import { createMqttPacketReasonStringProperty } from '../implementations/create-mqtt-packet-reason-string-property';
import { IMqttPacketReasonStringProperty } from '../mqtt-packet-reason-string-property.type';
import { IStandardMqttPacketReasonStringProperty } from './standard-mqtt-packet-reason-string-property.type';

export function standardMqttPacketReasonStringPropertyToMqttPacketReasonStringProperty(
  input: IStandardMqttPacketReasonStringProperty,
): IMqttPacketReasonStringProperty {
  return createMqttPacketReasonStringProperty(
    createReadonlyStringBufferFromString(input[MQTT_PACKET_REASON_STRING_PROPERTY_NAME]),
  );
}
