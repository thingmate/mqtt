import { IByteIteratorEncoder } from '../../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../functions/shared/string-buffer/create-byte-iterator-encoder-for-mqtt-packet-string-buffer';
import { IMqttPacketAuthenticationMethodPropertyValue } from '../../mqtt-packet-authentication-method-property.type';

export function createByteIteratorEncoderForMqttPacketAuthenticationMethodPropertyValue(
  input: IMqttPacketAuthenticationMethodPropertyValue,
): IByteIteratorEncoder {
  return createByteIteratorEncoderForMqttPacketReadonlyStringBuffer(input);
}

