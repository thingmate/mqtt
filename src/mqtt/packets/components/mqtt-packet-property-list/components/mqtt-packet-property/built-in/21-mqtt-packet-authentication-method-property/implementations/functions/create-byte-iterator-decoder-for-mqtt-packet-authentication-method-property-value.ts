import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketReadonlyStringBuffer,
} from '../../../../../../../../functions/shared/string-buffer/create-byte-iterator-decoder-for-mqtt-packet-string-buffer';
import { IMqttPacketAuthenticationMethodPropertyValue } from '../../mqtt-packet-authentication-method-property.type';

export function createByteIteratorDecoderForMqttPacketAuthenticationMethodPropertyValue(): IByteIteratorDecoder<IMqttPacketAuthenticationMethodPropertyValue> {
  return createByteIteratorDecoderForMqttPacketReadonlyStringBuffer();
}

