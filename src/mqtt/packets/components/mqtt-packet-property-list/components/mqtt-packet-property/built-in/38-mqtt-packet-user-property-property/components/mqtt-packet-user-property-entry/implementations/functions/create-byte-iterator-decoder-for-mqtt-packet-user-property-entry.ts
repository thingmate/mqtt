import { IByteIteratorDecoder } from '../../../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../../../functions/shared/string-buffer/create-byte-iterator-decoder-for-mqtt-packet-string-buffer';
import { IMqttPacketUserPropertyEntry } from '../../mqtt-packet-user-property-entry.type';
import { createMqttPacketUserPropertyEntry } from '../create-mqtt-packet-user-property-entry';

export function* createByteIteratorDecoderForMqttPacketUserPropertyEntry(): IByteIteratorDecoder<IMqttPacketUserPropertyEntry> {
  return createMqttPacketUserPropertyEntry({
    key: yield* createByteIteratorDecoderForMqttPacketReadonlyStringBuffer(),
    value: yield* createByteIteratorDecoderForMqttPacketReadonlyStringBuffer(),
  });
}

