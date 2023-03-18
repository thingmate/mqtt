import { IByteIteratorDecoder } from '../../../../../../../misc/codec/byte-iterator-decoder.type';
import { IReadonlyMqttConnectPacket } from '../../readonly-mqtt-connect-packet.type';
import {
  createByteIteratorDecoderForReadonlyMqttConnectPacketHavingFirstByte,
} from './create-byte-iterator-decoder-for-readonly-mqtt-connect-packet-having-first-byte';

export function* createByteIteratorDecoderForReadonlyMqttConnectPacket(): IByteIteratorDecoder<IReadonlyMqttConnectPacket> {
  return yield* createByteIteratorDecoderForReadonlyMqttConnectPacketHavingFirstByte(yield);
}

