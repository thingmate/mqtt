import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketU32,
} from '../../../../../../../../functions/shared/number/u32/create-byte-iterator-encoder-for-mqtt-packet-u32';
import { IMqttPacketWillDelayIntervalPropertyValue } from '../../mqtt-packet-will-delay-interval-property.type';

export function createByteIteratorEncoderForMqttPacketWillDelayIntervalPropertyValue(
  input: IMqttPacketWillDelayIntervalPropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketU32(input);
}

