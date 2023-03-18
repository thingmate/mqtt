import {
  createReadonlyStringBufferFromUint8Array,
} from '../../../../../../../../classes/string-buffer/readonly/implementations/create-readonly-string-buffer-from-uint8-array';
import { IByteIteratorDecoder } from '../../../../../../../../misc/codec/byte-iterator-decoder.type';

import {
  createByteIteratorDecoderForMqttPacketUint8ArrayWithLength,
} from '../../../../../../functions/shared/uint8-array/with-length/create-byte-iterator-decoder-for-mqtt-packet-uint8-array-with-length';
import { IReadonlyMqttPacketPayload } from '../../../readonly-mqtt-packet-payload.type';
import { createReadonlyMqttPacketPayloadFromStringBuffer } from '../../create-readonly-mqtt-packet-payload-from-string-buffer';

export function* createByteIteratorDecoderForReadonlyMqttPacketPayloadWithLength(): IByteIteratorDecoder<IReadonlyMqttPacketPayload> {
  return createReadonlyMqttPacketPayloadFromStringBuffer(
    createReadonlyStringBufferFromUint8Array(yield* createByteIteratorDecoderForMqttPacketUint8ArrayWithLength()),
  );
}

