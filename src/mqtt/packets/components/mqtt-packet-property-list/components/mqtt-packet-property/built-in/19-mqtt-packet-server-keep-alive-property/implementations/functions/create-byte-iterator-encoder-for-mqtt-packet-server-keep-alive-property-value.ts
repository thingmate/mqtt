import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketU16,
} from '../../../../../../../../functions/shared/number/u16/create-byte-iterator-encoder-for-mqtt-packet-u16';
import { IMqttPacketServerKeepAlivePropertyValue } from '../../mqtt-packet-server-keep-alive-property.type';

export function createByteIteratorEncoderForMqttPacketServerKeepAlivePropertyValue(
  input: IMqttPacketServerKeepAlivePropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketU16(input);
}

