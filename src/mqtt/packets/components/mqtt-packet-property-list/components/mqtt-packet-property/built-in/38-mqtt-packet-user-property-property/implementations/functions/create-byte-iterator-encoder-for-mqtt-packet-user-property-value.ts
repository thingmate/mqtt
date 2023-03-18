import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketUserPropertyEntry,
} from '../../components/mqtt-packet-user-property-entry/implementations/functions/create-byte-iterator-encoder-for-mqtt-packet-user-property-entry';
import { IMqttPacketUserPropertyValue } from '../../mqtt-packet-user-property.type';

export function createByteIteratorEncoderForMqttPacketUserPropertyValue(
  input: IMqttPacketUserPropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketUserPropertyEntry(input);
}

