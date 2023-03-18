import { IByteIteratorDecoder } from '../../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import { IReadonlyMqttConnackPacket } from '../../readonly-mqtt-connack-packet.type';
import {
  createByteIteratorDecoderForReadonlyMqttConnackPacketHavingFirstByte,
} from './create-byte-iterator-decoder-for-readonly-mqtt-connack-packet-having-first-byte';

export function* createByteIteratorDecoderForReadonlyMqttConnackPacket(
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttConnackPacket> {
  return yield* createByteIteratorDecoderForReadonlyMqttConnackPacketHavingFirstByte(yield, protocolVersion);
}

