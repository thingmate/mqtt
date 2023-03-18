import { IByteIteratorDecoder } from '../../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import { IReadonlyMqttSubackPacket } from '../../readonly-mqtt-suback-packet.type';
import {
  createByteIteratorDecoderForReadonlyMqttSubackPacketHavingFirstByte,
} from './create-byte-iterator-decoder-for-readonly-mqtt-suback-packet-having-first-byte';

export function* createByteIteratorDecoderForReadonlyMqttSubackPacket(
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttSubackPacket> {
  return yield* createByteIteratorDecoderForReadonlyMqttSubackPacketHavingFirstByte(yield, protocolVersion);
}

