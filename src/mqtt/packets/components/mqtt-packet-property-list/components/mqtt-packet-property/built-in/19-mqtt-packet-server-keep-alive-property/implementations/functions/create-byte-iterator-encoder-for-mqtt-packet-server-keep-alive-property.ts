import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketServerKeepAliveProperty } from '../../mqtt-packet-server-keep-alive-property.type';
import {
  createByteIteratorEncoderForMqttPacketServerKeepAlivePropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-server-keep-alive-property-value';

export function* createByteIteratorEncoderForMqttPacketServerKeepAliveProperty(
  input: IMqttPacketServerKeepAliveProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketServerKeepAlivePropertyValue(input.getValue());
}

