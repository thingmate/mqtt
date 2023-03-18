import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../functions/shared/string-buffer/create-byte-iterator-decoder-for-mqtt-packet-string-buffer';
import { IMqttPacketContentTypePropertyValue } from '../../mqtt-packet-content-type-property.type';

export function createByteIteratorDecoderForMqttPacketContentTypePropertyValue(): IByteIteratorDecoder<IMqttPacketContentTypePropertyValue> {
  return createByteIteratorDecoderForMqttPacketReadonlyStringBuffer();
}

