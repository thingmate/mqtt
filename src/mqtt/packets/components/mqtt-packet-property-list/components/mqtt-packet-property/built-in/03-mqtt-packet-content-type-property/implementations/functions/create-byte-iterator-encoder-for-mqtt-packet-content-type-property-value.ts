import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../functions/shared/string-buffer/create-byte-iterator-encoder-for-mqtt-packet-string-buffer';
import { IMqttPacketContentTypePropertyValue } from '../../mqtt-packet-content-type-property.type';

export function createByteIteratorEncoderForMqttPacketContentTypePropertyValue(
  input: IMqttPacketContentTypePropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketReadonlyStringBuffer(input);
}

