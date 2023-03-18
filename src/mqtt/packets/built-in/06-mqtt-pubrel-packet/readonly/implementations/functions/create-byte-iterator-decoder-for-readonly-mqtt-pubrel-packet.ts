import { IByteIteratorDecoder } from '../../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import { IReadonlyMqttPubrelPacket } from '../../readonly-mqtt-pubrel-packet.type';
import {
  createByteIteratorDecoderForReadonlyMqttPubrelPacketHavingFirstByte,
} from './create-byte-iterator-decoder-for-readonly-mqtt-pubrel-packet-having-first-byte';

export function* createByteIteratorDecoderForReadonlyMqttPubrelPacket(
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttPubrelPacket> {
  return yield* createByteIteratorDecoderForReadonlyMqttPubrelPacketHavingFirstByte(yield, protocolVersion);
}

