import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../functions/shared/string-buffer/create-byte-iterator-encoder-for-mqtt-packet-string-buffer';
import { IMqttPacketAssignedClientIdentifierPropertyValue } from '../../mqtt-packet-assigned-client-identifier-property.type';

export function createByteIteratorEncoderForMqttPacketAssignedClientIdentifierPropertyValue(
  input: IMqttPacketAssignedClientIdentifierPropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketReadonlyStringBuffer(input);
}

