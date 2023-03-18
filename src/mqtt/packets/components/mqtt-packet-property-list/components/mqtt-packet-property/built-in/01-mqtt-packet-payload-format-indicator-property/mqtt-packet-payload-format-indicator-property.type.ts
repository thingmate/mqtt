import { IReadonlyMqttPacketProperty } from '../../readonly/readonly-mqtt-packet-property.type';
import {
  MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_CODE,
} from './constants/mqtt-packet-payload-format-indicator-property-code.constant';
import {
  MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_NAME,
} from './constants/mqtt-packet-payload-format-indicator-property-name.constant';

export type IMqttPacketPayloadFormatIndicatorPropertyCode = typeof MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_CODE;
export type IMqttPacketPayloadFormatIndicatorPropertyName = typeof MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_NAME;
export type IMqttPacketPayloadFormatIndicatorPropertyValue = boolean;

export interface IMqttPacketPayloadFormatIndicatorProperty extends //
  IReadonlyMqttPacketProperty<IMqttPacketPayloadFormatIndicatorPropertyCode, IMqttPacketPayloadFormatIndicatorPropertyName, IMqttPacketPayloadFormatIndicatorPropertyValue>
//
{

}

