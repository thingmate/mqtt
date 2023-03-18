import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketUserProperty } from '../../mqtt-packet-user-property.type';
import {
  createByteIteratorEncoderForMqttPacketUserPropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-user-property-value';

export function* createByteIteratorEncoderForMqttPacketUserProperty(
  input: IMqttPacketUserProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketUserPropertyValue(input.getValue());
}

