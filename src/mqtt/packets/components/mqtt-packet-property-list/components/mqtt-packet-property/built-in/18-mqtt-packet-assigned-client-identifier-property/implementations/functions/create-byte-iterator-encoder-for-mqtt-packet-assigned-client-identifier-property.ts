import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttPacketAssignedClientIdentifierProperty } from '../../mqtt-packet-assigned-client-identifier-property.type';
import {
  createByteIteratorEncoderForMqttPacketAssignedClientIdentifierPropertyValue,
} from './create-byte-iterator-encoder-for-mqtt-packet-assigned-client-identifier-property-value';

export function* createByteIteratorEncoderForMqttPacketAssignedClientIdentifierProperty(
  input: IMqttPacketAssignedClientIdentifierProperty,
): IByteIteratorEncoder {
  yield input.getCode();
  yield* createByteIteratorEncoderForMqttPacketAssignedClientIdentifierPropertyValue(input.getValue());
}

