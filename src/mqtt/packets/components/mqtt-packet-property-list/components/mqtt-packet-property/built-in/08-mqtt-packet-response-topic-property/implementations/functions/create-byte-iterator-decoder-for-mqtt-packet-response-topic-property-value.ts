import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../functions/shared/string-buffer/create-byte-iterator-decoder-for-mqtt-packet-string-buffer';
import { IMqttPacketResponseTopicPropertyValue } from '../../mqtt-packet-response-topic-property.type';

export function createByteIteratorDecoderForMqttPacketResponseTopicPropertyValue(): IByteIteratorDecoder<IMqttPacketResponseTopicPropertyValue> {
  return createByteIteratorDecoderForMqttPacketReadonlyStringBuffer();
}

