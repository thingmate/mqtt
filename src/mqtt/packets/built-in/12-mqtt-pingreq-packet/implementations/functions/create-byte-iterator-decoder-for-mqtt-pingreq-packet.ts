import { IByteIteratorDecoder } from '../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../constants/mqtt-protocol-version.type';
import { IMqttPingreqPacket } from '../../mqtt-pingreq-packet.type';
import {
  createByteIteratorDecoderForMqttPingreqPacketHavingFirstByte,
} from './create-byte-iterator-decoder-for-mqtt-pingreq-packet-having-first-byte';

export function* createByteIteratorDecoderForMqttPingreqPacket(
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IMqttPingreqPacket> {
  return yield* createByteIteratorDecoderForMqttPingreqPacketHavingFirstByte(yield, protocolVersion);
}

