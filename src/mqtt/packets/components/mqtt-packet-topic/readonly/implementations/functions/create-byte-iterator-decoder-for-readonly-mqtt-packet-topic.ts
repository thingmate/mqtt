import { IByteIteratorDecoder } from '../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketReadonlyStringBuffer,
} from '../../../../../functions/shared/string-buffer/create-byte-iterator-decoder-for-mqtt-packet-string-buffer';
import { IReadonlyMqttPacketTopic } from '../../readonly-mqtt-packet-topic.type';
import { createReadonlyMqttPacketTopicFromStringBuffer } from '../create-readonly-mqtt-packet-topic-from-string-buffer';

export function* createByteIteratorDecoderForReadonlyMqttPacketTopic(): IByteIteratorDecoder<IReadonlyMqttPacketTopic> {
  return createReadonlyMqttPacketTopicFromStringBuffer(
    yield* createByteIteratorDecoderForMqttPacketReadonlyStringBuffer(),
  );
}

