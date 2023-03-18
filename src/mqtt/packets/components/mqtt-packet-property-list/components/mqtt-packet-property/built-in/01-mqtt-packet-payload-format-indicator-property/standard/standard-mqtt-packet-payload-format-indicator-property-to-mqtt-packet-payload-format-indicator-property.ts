import {
  MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_NAME,
} from '../constants/mqtt-packet-payload-format-indicator-property-name.constant';
import { createMqttPacketPayloadFormatIndicatorProperty } from '../implementations/create-mqtt-packet-payload-format-indicator-property';
import { IMqttPacketPayloadFormatIndicatorProperty } from '../mqtt-packet-payload-format-indicator-property.type';
import { IStandardMqttPacketPayloadFormatIndicatorProperty } from './standard-mqtt-packet-payload-format-indicator-property.type';

export function standardMqttPacketPayloadFormatIndicatorPropertyToMqttPacketPayloadFormatIndicatorProperty(
  input: IStandardMqttPacketPayloadFormatIndicatorProperty,
): IMqttPacketPayloadFormatIndicatorProperty {
  return createMqttPacketPayloadFormatIndicatorProperty(
    input[MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_NAME],
  );
}
