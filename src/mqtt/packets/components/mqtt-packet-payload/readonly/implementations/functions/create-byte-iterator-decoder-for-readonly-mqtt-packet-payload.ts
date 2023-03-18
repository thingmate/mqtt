import { u32 } from '@lifaon/number-types';
import {
  createReadonlyStringBufferFromUint8Array,
} from '../../../../../../../classes/string-buffer/readonly/implementations/create-readonly-string-buffer-from-uint8-array';
import { IByteIteratorDecoder } from '../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketUint8Array,
} from '../../../../../functions/shared/uint8-array/create-byte-iterator-decoder-for-mqtt-packet-uint8-array';
import { IReadonlyMqttPacketPayload } from '../../readonly-mqtt-packet-payload.type';
import { createReadonlyMqttPacketPayloadFromStringBuffer } from '../create-readonly-mqtt-packet-payload-from-string-buffer';

export function* createByteIteratorDecoderForReadonlyMqttPacketPayload(
  length: u32,
): IByteIteratorDecoder<IReadonlyMqttPacketPayload> {
  return createReadonlyMqttPacketPayloadFromStringBuffer(
    createReadonlyStringBufferFromUint8Array(yield* createByteIteratorDecoderForMqttPacketUint8Array(length)),
  );
}

