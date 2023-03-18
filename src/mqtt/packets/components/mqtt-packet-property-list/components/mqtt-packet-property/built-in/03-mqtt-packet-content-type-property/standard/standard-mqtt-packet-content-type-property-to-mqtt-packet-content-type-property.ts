import {
  createReadonlyStringBufferFromString,
} from '../../../../../../../../../classes/string-buffer/readonly/implementations/create-readonly-string-buffer-from-string';
import { MQTT_PACKET_CONTENT_TYPE_PROPERTY_NAME } from '../constants/mqtt-packet-content-type-property-name.constant';
import { createMqttPacketContentTypeProperty } from '../implementations/create-mqtt-packet-content-type-property';
import { IMqttPacketContentTypeProperty } from '../mqtt-packet-content-type-property.type';
import { IStandardMqttPacketContentTypeProperty } from './standard-mqtt-packet-content-type-property.type';

export function standardMqttPacketContentTypePropertyToMqttPacketContentTypeProperty(
  input: IStandardMqttPacketContentTypeProperty,
): IMqttPacketContentTypeProperty {
  return createMqttPacketContentTypeProperty(
    createReadonlyStringBufferFromString(input[MQTT_PACKET_CONTENT_TYPE_PROPERTY_NAME]),
  );
}
