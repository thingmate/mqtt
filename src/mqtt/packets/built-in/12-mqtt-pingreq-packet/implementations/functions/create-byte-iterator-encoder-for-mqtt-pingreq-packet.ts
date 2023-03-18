import { IByteIteratorEncoder } from '../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttProtocolVersion } from '../../../../../constants/mqtt-protocol-version.type';
import { IMqttPingreqPacket } from '../../mqtt-pingreq-packet.type';

export function* createByteIteratorEncoderForMqttPingreqPacket(
  packet: IMqttPingreqPacket,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorEncoder {
  /* WRITE PACKET'S CONTENT */
  yield 0b11000000; // fixed header
  yield 0b00000000; // fixed header
}

