import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketU32,
} from '../../../../../../../../functions/shared/number/u32/create-byte-iterator-decoder-for-mqtt-packet-u32';
import { IMqttPacketWillDelayIntervalPropertyValue } from '../../mqtt-packet-will-delay-interval-property.type';

export function createByteIteratorDecoderForMqttPacketWillDelayIntervalPropertyValue(): IByteIteratorDecoder<IMqttPacketWillDelayIntervalPropertyValue> {
  return createByteIteratorDecoderForMqttPacketU32();
}

