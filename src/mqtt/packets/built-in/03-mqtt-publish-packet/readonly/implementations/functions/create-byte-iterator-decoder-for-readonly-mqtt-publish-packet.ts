import { IByteIteratorDecoder } from '../../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import { IReadonlyMqttPublishPacket } from '../../readonly-mqtt-publish-packet.type';
import {
  createByteIteratorDecoderForReadonlyMqttPublishPacketHavingFirstByte,
} from './create-byte-iterator-decoder-for-readonly-mqtt-publish-packet-having-first-byte';

export function* createByteIteratorDecoderForReadonlyMqttPublishPacket(
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttPublishPacket> {
  return yield* createByteIteratorDecoderForReadonlyMqttPublishPacketHavingFirstByte(yield, protocolVersion);
}

