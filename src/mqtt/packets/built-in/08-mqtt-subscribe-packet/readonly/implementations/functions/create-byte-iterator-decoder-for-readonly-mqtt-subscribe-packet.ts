import { IByteIteratorDecoder } from '../../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import { IReadonlyMqttSubscribePacket } from '../../readonly-mqtt-subscribe-packet.type';
import {
  createByteIteratorDecoderForReadonlyMqttSubscribePacketHavingFirstByte,
} from './create-byte-iterator-decoder-for-readonly-mqtt-subscribe-packet-having-first-byte';

export function* createByteIteratorDecoderForReadonlyMqttSubscribePacket(
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttSubscribePacket> {
  return yield* createByteIteratorDecoderForReadonlyMqttSubscribePacketHavingFirstByte(yield, protocolVersion);
}

