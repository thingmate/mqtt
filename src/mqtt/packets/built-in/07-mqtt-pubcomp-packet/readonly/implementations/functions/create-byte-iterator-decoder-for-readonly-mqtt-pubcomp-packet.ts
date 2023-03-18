import { IByteIteratorDecoder } from '../../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import { IReadonlyMqttPubcompPacket } from '../../readonly-mqtt-pubcomp-packet.type';
import {
  createByteIteratorDecoderForReadonlyMqttPubcompPacketHavingFirstByte,
} from './create-byte-iterator-decoder-for-readonly-mqtt-pubcomp-packet-having-first-byte';

export function* createByteIteratorDecoderForReadonlyMqttPubcompPacket(
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttPubcompPacket> {
  return yield* createByteIteratorDecoderForReadonlyMqttPubcompPacketHavingFirstByte(yield, protocolVersion);
}

