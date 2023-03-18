import { createReadonlyMqttPacketProperty } from '../../../readonly/implementations/create-readonly-mqtt-packet-property';
import {
  MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_CODE,
} from '../constants/mqtt-packet-payload-format-indicator-property-code.constant';
import {
  MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_NAME,
} from '../constants/mqtt-packet-payload-format-indicator-property-name.constant';
import {
  IMqttPacketPayloadFormatIndicatorProperty,
  IMqttPacketPayloadFormatIndicatorPropertyCode,
  IMqttPacketPayloadFormatIndicatorPropertyName,
  IMqttPacketPayloadFormatIndicatorPropertyValue,
} from '../mqtt-packet-payload-format-indicator-property.type';

export function createMqttPacketPayloadFormatIndicatorProperty(
  value: IMqttPacketPayloadFormatIndicatorPropertyValue,
): IMqttPacketPayloadFormatIndicatorProperty {
  return createReadonlyMqttPacketProperty<IMqttPacketPayloadFormatIndicatorPropertyCode, IMqttPacketPayloadFormatIndicatorPropertyName, IMqttPacketPayloadFormatIndicatorPropertyValue>({
    code: MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_CODE,
    name: MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_NAME,
    value,
  });
}

