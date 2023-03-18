import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/create-byte-iterator-encoder-for-mqtt-packet-boolean';
import { IMqttPacketPayloadFormatIndicatorPropertyValue } from '../../mqtt-packet-payload-format-indicator-property.type';

export function createByteIteratorEncoderForMqttPacketPayloadFormatIndicatorPropertyValue(
  input: IMqttPacketPayloadFormatIndicatorPropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketBoolean(input);
}

