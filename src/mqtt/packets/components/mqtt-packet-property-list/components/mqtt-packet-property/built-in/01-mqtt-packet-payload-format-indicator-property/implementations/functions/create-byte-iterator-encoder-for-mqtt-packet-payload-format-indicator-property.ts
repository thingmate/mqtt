import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketPayloadFormatIndicatorProperty } from '../../mqtt-packet-payload-format-indicator-property.type';
import {
  createByteIteratorEncoderForMqttPacketPayloadFormatIndicatorPropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-payload-format-indicator-property-value';

export function* createByteIteratorEncoderForMqttPacketPayloadFormatIndicatorProperty(
  input: IMqttPacketPayloadFormatIndicatorProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketPayloadFormatIndicatorPropertyValue(input.getValue());
}

