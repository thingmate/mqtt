import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/create-byte-iterator-decoder-for-mqtt-packet-boolean';
import { IMqttPacketPayloadFormatIndicatorPropertyValue } from '../../mqtt-packet-payload-format-indicator-property.type';

export function createByteIteratorDecoderForMqttPacketPayloadFormatIndicatorPropertyValue(): IByteIteratorDecoder<IMqttPacketPayloadFormatIndicatorPropertyValue> {
  return createByteIteratorDecoderForMqttPacketBoolean();
}

