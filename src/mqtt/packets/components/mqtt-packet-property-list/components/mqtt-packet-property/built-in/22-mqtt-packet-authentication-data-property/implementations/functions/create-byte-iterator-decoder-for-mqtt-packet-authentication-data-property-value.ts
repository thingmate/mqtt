import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketUint8ArrayWithLength,
} from '../../../../../../../../functions/shared/uint8-array/with-length/create-byte-iterator-decoder-for-mqtt-packet-uint8-array-with-length';
import { IMqttPacketAuthenticationDataPropertyValue } from '../../mqtt-packet-authentication-data-property.type';

export function createByteIteratorDecoderForMqttPacketAuthenticationDataPropertyValue(): IByteIteratorDecoder<IMqttPacketAuthenticationDataPropertyValue> {
  return createByteIteratorDecoderForMqttPacketUint8ArrayWithLength();
}

