import {
  MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_NAME,
} from '../constants/mqtt-packet-payload-format-indicator-property-name.constant';
import { IMqttPacketPayloadFormatIndicatorProperty } from '../mqtt-packet-payload-format-indicator-property.type';
import { IStandardMqttPacketPayloadFormatIndicatorProperty } from './standard-mqtt-packet-payload-format-indicator-property.type';

export function mqttPacketPayloadFormatIndicatorPropertyToStandardMqttPacketPayloadFormatIndicatorProperty(
  {
    getValue,
  }: IMqttPacketPayloadFormatIndicatorProperty,
): IStandardMqttPacketPayloadFormatIndicatorProperty {
  return {
    [MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_NAME]: getValue(),
  };
}
