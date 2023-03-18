import { IByteIteratorEncoder } from '../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketReadonlyStringBuffer,
} from '../../../../../functions/shared/string-buffer/create-byte-iterator-encoder-for-mqtt-packet-string-buffer';
import { IReadonlyMqttPacketTopic } from '../../readonly-mqtt-packet-topic.type';

export function createByteIteratorEncoderForReadonlyMqttPacketTopic(
  input: IReadonlyMqttPacketTopic,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketReadonlyStringBuffer(input);
}

