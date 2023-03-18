import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketRetainAvailableProperty } from '../../mqtt-packet-retain-available-property.type';
import {
  createByteIteratorEncoderForMqttPacketRetainAvailablePropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-retain-available-property-value';

export function* createByteIteratorEncoderForMqttPacketRetainAvailableProperty(
  input: IMqttPacketRetainAvailableProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketRetainAvailablePropertyValue(input.getValue());
}

