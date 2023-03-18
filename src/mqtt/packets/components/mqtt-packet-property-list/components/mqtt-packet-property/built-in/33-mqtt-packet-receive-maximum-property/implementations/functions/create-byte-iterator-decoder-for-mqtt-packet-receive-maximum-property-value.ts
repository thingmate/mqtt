import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketU16,
} from '../../../../../../../../functions/shared/number/u16/create-byte-iterator-decoder-for-mqtt-packet-u16';
import { IMqttPacketReceiveMaximumPropertyValue } from '../../mqtt-packet-receive-maximum-property.type';

export function createByteIteratorDecoderForMqttPacketReceiveMaximumPropertyValue(): IByteIteratorDecoder<IMqttPacketReceiveMaximumPropertyValue> {
  return createByteIteratorDecoderForMqttPacketU16();
}

