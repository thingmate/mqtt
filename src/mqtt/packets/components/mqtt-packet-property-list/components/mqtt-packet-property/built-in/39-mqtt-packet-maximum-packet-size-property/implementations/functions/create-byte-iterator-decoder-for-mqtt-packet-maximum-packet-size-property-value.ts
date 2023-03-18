import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketU32,
} from '../../../../../../../../functions/shared/number/u32/create-byte-iterator-decoder-for-mqtt-packet-u32';
import { IMqttPacketMaximumPacketSizePropertyValue } from '../../mqtt-packet-maximum-packet-size-property.type';

export function createByteIteratorDecoderForMqttPacketMaximumPacketSizePropertyValue(): IByteIteratorDecoder<IMqttPacketMaximumPacketSizePropertyValue> {
  return createByteIteratorDecoderForMqttPacketU32();
}

