import { IByteIteratorDecoder } from '../../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import { IReadonlyMqttUnsubscribePacket } from '../../readonly-mqtt-unsubscribe-packet.type';
import {
  createByteIteratorDecoderForReadonlyMqttUnsubscribePacketHavingFirstByte,
} from './create-byte-iterator-decoder-for-readonly-mqtt-unsubscribe-packet-having-first-byte';

export function* createByteIteratorDecoderForReadonlyMqttUnsubscribePacket(
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttUnsubscribePacket> {
  return yield* createByteIteratorDecoderForReadonlyMqttUnsubscribePacketHavingFirstByte(yield, protocolVersion);
}

