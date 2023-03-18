import { IByteIteratorEncoder } from '../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttProtocolVersion } from '../../../../../constants/mqtt-protocol-version.type';
import { IMqttPingrespPacket } from '../../mqtt-pingresp-packet.type';

export function* createByteIteratorEncoderForMqttPingrespPacket(
  packet: IMqttPingrespPacket,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorEncoder {
  /* WRITE PACKET'S CONTENT */
  yield 0b11010000; // fixed header
  yield 0b00000000; // fixed header
}

