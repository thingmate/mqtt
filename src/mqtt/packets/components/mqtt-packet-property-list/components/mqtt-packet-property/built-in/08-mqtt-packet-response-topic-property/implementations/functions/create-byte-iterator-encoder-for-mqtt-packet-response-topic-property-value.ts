import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../functions/shared/string-buffer/create-byte-iterator-encoder-for-mqtt-packet-string-buffer';
import { IMqttPacketResponseTopicPropertyValue } from '../../mqtt-packet-response-topic-property.type';

export function createByteIteratorEncoderForMqttPacketResponseTopicPropertyValue(
  input: IMqttPacketResponseTopicPropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketReadonlyStringBuffer(input);
}

