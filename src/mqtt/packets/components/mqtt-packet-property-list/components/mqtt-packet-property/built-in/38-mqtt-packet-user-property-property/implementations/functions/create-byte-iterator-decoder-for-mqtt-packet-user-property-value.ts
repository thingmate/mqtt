import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketUserPropertyEntry,
} from '../../components/mqtt-packet-user-property-entry/implementations/functions/create-byte-iterator-decoder-for-mqtt-packet-user-property-entry';
import { IMqttPacketUserPropertyValue } from '../../mqtt-packet-user-property.type';

export function createByteIteratorDecoderForMqttPacketUserPropertyValue(): IByteIteratorDecoder<IMqttPacketUserPropertyValue> {
  return createByteIteratorDecoderForMqttPacketUserPropertyEntry();
}

