import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/create-byte-iterator-decoder-for-mqtt-packet-boolean';
import { IMqttPacketRetainAvailablePropertyValue } from '../../mqtt-packet-retain-available-property.type';

export function createByteIteratorDecoderForMqttPacketRetainAvailablePropertyValue(): IByteIteratorDecoder<IMqttPacketRetainAvailablePropertyValue> {
  return createByteIteratorDecoderForMqttPacketBoolean();
}

