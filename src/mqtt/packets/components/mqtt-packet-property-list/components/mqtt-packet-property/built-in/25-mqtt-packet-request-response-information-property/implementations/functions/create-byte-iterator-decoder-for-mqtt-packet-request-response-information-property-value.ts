import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/create-byte-iterator-decoder-for-mqtt-packet-boolean';
import { IMqttPacketRequestResponseInformationPropertyValue } from '../../mqtt-packet-request-response-information-property.type';

export function createByteIteratorDecoderForMqttPacketRequestResponseInformationPropertyValue(): IByteIteratorDecoder<IMqttPacketRequestResponseInformationPropertyValue> {
  return createByteIteratorDecoderForMqttPacketBoolean();
}

