import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../constants/mqtt-protocol-version.type';
import { STATIC_MQTT_PINGREQ_PACKET } from '../../constants/static-mqtt-pingreq-packet.constant';
import { IMqttPingreqPacket } from '../../mqtt-pingreq-packet.type';

export function* createByteIteratorDecoderForMqttPingreqPacketHavingFirstByte(
  firstByte: u8,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IMqttPingreqPacket> {
  if (firstByte !== 0b11000000) {
    throw new Error(`Not a PINGREQ packet`);
  }
  if ((yield) === 0b00000000) {
    return STATIC_MQTT_PINGREQ_PACKET;
  } else {
    throw new Error(`Second byte of PINGREQ packet is invalid`);
  }
}

