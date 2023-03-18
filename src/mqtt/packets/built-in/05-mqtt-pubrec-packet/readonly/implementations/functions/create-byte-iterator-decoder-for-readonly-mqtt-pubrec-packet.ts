import { IByteIteratorDecoder } from '../../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import { IReadonlyMqttPubrecPacket } from '../../readonly-mqtt-pubrec-packet.type';
import {
  createByteIteratorDecoderForReadonlyMqttPubrecPacketHavingFirstByte,
} from './create-byte-iterator-decoder-for-readonly-mqtt-pubrec-packet-having-first-byte';

export function* createByteIteratorDecoderForReadonlyMqttPubrecPacket(
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttPubrecPacket> {
  return yield* createByteIteratorDecoderForReadonlyMqttPubrecPacketHavingFirstByte(yield, protocolVersion);
}

