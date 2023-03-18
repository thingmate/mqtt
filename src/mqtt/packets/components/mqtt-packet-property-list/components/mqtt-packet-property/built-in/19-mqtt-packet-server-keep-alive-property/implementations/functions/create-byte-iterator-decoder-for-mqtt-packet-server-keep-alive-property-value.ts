import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketU16,
} from '../../../../../../../../functions/shared/number/u16/create-byte-iterator-decoder-for-mqtt-packet-u16';
import { IMqttPacketServerKeepAlivePropertyValue } from '../../mqtt-packet-server-keep-alive-property.type';

export function createByteIteratorDecoderForMqttPacketServerKeepAlivePropertyValue(): IByteIteratorDecoder<IMqttPacketServerKeepAlivePropertyValue> {
  return createByteIteratorDecoderForMqttPacketU16();
}

