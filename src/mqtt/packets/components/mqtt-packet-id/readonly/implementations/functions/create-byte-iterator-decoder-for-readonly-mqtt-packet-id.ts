import { IByteIteratorDecoder } from '../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketU16,
} from '../../../../../functions/shared/number/u16/create-byte-iterator-decoder-for-mqtt-packet-u16';
import { IReadonlyMqttPacketId } from '../../readonly-mqtt-packet-id.type';
import { createReadonlyMqttPacketId } from '../create-readonly-mqtt-packet-id';

export function* createByteIteratorDecoderForReadonlyMqttPacketId(): IByteIteratorDecoder<IReadonlyMqttPacketId> {
  return createReadonlyMqttPacketId({
    value: yield* createByteIteratorDecoderForMqttPacketU16(),
  });
}

