import { IByteIteratorDecoder } from '../../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import { IReadonlyMqttUnsubackPacket } from '../../readonly-mqtt-unsuback-packet.type';
import {
  createByteIteratorDecoderForReadonlyMqttUnsubackPacketHavingFirstByte,
} from './create-byte-iterator-decoder-for-readonly-mqtt-unsuback-packet-having-first-byte';

export function* createByteIteratorDecoderForReadonlyMqttUnsubackPacket(
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttUnsubackPacket> {
  return yield* createByteIteratorDecoderForReadonlyMqttUnsubackPacketHavingFirstByte(yield, protocolVersion);
}

