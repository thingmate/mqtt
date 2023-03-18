import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_CODE,
} from '../../constants/mqtt-packet-payload-format-indicator-property-code.constant';
import { IMqttPacketPayloadFormatIndicatorProperty } from '../../mqtt-packet-payload-format-indicator-property.type';
import { createMqttPacketPayloadFormatIndicatorProperty } from '../create-mqtt-packet-payload-format-indicator-property';
import {
  createByteIteratorDecoderForMqttPacketPayloadFormatIndicatorPropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-payload-format-indicator-property-value';

export function* createByteIteratorDecoderForMqttPacketPayloadFormatIndicatorPropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketPayloadFormatIndicatorProperty> {
  if (firstByte !== MQTT_PACKET_PAYLOAD_FORMAT_INDICATOR_PROPERTY_CODE) {
    throw new Error(`Not a PayloadFormatIndicator property`);
  }
  return createMqttPacketPayloadFormatIndicatorProperty(
    yield* createByteIteratorDecoderForMqttPacketPayloadFormatIndicatorPropertyValue(),
  );
}

