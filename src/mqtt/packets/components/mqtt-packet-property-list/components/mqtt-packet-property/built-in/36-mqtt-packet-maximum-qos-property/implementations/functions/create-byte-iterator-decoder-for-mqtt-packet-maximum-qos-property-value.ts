import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketU16,
} from '../../../../../../../../functions/shared/number/u16/create-byte-iterator-decoder-for-mqtt-packet-u16';
import { IMqttPacketMaximumQoSPropertyValue } from '../../mqtt-packet-maximum-qos-property.type';

export function createByteIteratorDecoderForMqttPacketMaximumQoSPropertyValue(): IByteIteratorDecoder<IMqttPacketMaximumQoSPropertyValue> {
  return createByteIteratorDecoderForMqttPacketU16();
}

