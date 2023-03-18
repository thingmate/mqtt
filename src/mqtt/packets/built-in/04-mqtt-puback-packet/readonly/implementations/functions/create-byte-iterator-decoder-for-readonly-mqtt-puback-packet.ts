import { IByteIteratorDecoder } from '../../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import { IReadonlyMqttPubackPacket } from '../../readonly-mqtt-puback-packet.type';
import {
  createByteIteratorDecoderForReadonlyMqttPubackPacketHavingFirstByte,
} from './create-byte-iterator-decoder-for-readonly-mqtt-puback-packet-having-first-byte';

export function* createByteIteratorDecoderForReadonlyMqttPubackPacket(
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttPubackPacket> {
  return yield* createByteIteratorDecoderForReadonlyMqttPubackPacketHavingFirstByte(yield, protocolVersion);
}

