import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketUint8ArrayWithLength,
} from '../../../../../../../../functions/shared/uint8-array/with-length/create-byte-iterator-decoder-for-mqtt-packet-uint8-array-with-length';
import { IMqttPacketCorrelationDataPropertyValue } from '../../mqtt-packet-correlation-data-property.type';

export function createByteIteratorDecoderForMqttPacketCorrelationDataPropertyValue(): IByteIteratorDecoder<IMqttPacketCorrelationDataPropertyValue> {
  return createByteIteratorDecoderForMqttPacketUint8ArrayWithLength();
}

