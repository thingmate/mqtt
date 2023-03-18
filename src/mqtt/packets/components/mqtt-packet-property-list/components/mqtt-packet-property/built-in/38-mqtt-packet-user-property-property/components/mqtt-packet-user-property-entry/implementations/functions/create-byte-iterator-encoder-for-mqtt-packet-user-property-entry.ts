import { IByteIteratorEncoder } from '../../../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../../../functions/shared/string-buffer/create-byte-iterator-encoder-for-mqtt-packet-string-buffer';
import { IMqttPacketUserPropertyEntry } from '../../mqtt-packet-user-property-entry.type';

export function* createByteIteratorEncoderForMqttPacketUserPropertyEntry(
  input: IMqttPacketUserPropertyEntry,
): IByteIteratorEncoder {
  yield* createByteIteratorEncoderForMqttPacketReadonlyStringBuffer(input.getKey());
  yield* createByteIteratorEncoderForMqttPacketReadonlyStringBuffer(input.getValue());
}

