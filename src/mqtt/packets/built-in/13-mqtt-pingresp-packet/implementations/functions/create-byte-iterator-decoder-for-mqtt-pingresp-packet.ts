import { IByteIteratorDecoder } from '../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../constants/mqtt-protocol-version.type';
import { IMqttPingrespPacket } from '../../mqtt-pingresp-packet.type';
import {
  createByteIteratorDecoderForMqttPingrespPacketHavingFirstByte,
} from './create-byte-iterator-decoder-for-mqtt-pingresp-packet-having-first-byte';

export function* createByteIteratorDecoderForMqttPingrespPacket(
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IMqttPingrespPacket> {
  return yield* createByteIteratorDecoderForMqttPingrespPacketHavingFirstByte(yield, protocolVersion);
}

