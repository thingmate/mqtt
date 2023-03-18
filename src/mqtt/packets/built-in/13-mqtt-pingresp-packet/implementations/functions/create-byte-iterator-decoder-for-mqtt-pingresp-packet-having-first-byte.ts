import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../constants/mqtt-protocol-version.type';
import { STATIC_MQTT_PINGRESP_PACKET } from '../../constants/static-mqtt-pingresp-packet.constant';
import { IMqttPingrespPacket } from '../../mqtt-pingresp-packet.type';

export function* createByteIteratorDecoderForMqttPingrespPacketHavingFirstByte(
  firstByte: u8,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IMqttPingrespPacket> {
  if (firstByte !== 0b11010000) {
    throw new Error(`Not a PINGRESP packet`);
  }
  if ((yield) === 0b00000000) {
    return STATIC_MQTT_PINGRESP_PACKET;
  } else {
    throw new Error(`Second byte of PINGRESP packet is invalid`);
  }
}

