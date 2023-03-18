import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import { MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_CODE } from '../../constants/mqtt-packet-server-keep-alive-property-code.constant';
import { IMqttPacketServerKeepAliveProperty } from '../../mqtt-packet-server-keep-alive-property.type';
import { createMqttPacketServerKeepAliveProperty } from '../create-mqtt-packet-server-keep-alive-property';
import {
  createByteIteratorDecoderForMqttPacketServerKeepAlivePropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-server-keep-alive-property-value';

export function* createByteIteratorDecoderForMqttPacketServerKeepAlivePropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketServerKeepAliveProperty> {
  if (firstByte !== MQTT_PACKET_SERVER_KEEP_ALIVE_PROPERTY_CODE) {
    throw new Error(`Not a ServerKeepAlive property`);
  }
  return createMqttPacketServerKeepAliveProperty(
    yield* createByteIteratorDecoderForMqttPacketServerKeepAlivePropertyValue(),
  );
}

