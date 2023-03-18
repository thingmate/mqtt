import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketReasonStringProperty } from '../../mqtt-packet-reason-string-property.type';
import {
  createByteIteratorEncoderForMqttPacketReasonStringPropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-reason-string-property-value';

export function* createByteIteratorEncoderForMqttPacketReasonStringProperty(
  input: IMqttPacketReasonStringProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketReasonStringPropertyValue(input.getValue());
}

