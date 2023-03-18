import { IByteIteratorDecoder } from '../../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import { IReadonlyMqttDisconnectPacket } from '../../readonly-mqtt-disconnect-packet.type';
import {
  createByteIteratorDecoderForReadonlyMqttDisconnectPacketHavingFirstByte,
} from './create-byte-iterator-decoder-for-readonly-mqtt-disconnect-packet-having-first-byte';

export function* createByteIteratorDecoderForReadonlyMqttDisconnectPacket(
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttDisconnectPacket> {
  return yield* createByteIteratorDecoderForReadonlyMqttDisconnectPacketHavingFirstByte(yield, protocolVersion);
}

