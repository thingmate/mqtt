import { IByteIteratorDecoder } from '../../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import { IReadonlyMqttAuthPacket } from '../../readonly-mqtt-auth-packet.type';
import {
  createByteIteratorDecoderForReadonlyMqttAuthPacketHavingFirstByte,
} from './create-byte-iterator-decoder-for-readonly-mqtt-auth-packet-having-first-byte';

export function* createByteIteratorDecoderForReadonlyMqttAuthPacket(
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttAuthPacket> {
  return yield* createByteIteratorDecoderForReadonlyMqttAuthPacketHavingFirstByte(yield, protocolVersion);
}

