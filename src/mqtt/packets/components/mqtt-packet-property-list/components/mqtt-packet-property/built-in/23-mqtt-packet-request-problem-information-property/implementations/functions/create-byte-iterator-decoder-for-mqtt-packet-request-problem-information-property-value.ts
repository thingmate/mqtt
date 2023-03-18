import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/create-byte-iterator-decoder-for-mqtt-packet-boolean';
import { IMqttPacketRequestProblemInformationPropertyValue } from '../../mqtt-packet-request-problem-information-property.type';

export function createByteIteratorDecoderForMqttPacketRequestProblemInformationPropertyValue(): IByteIteratorDecoder<IMqttPacketRequestProblemInformationPropertyValue> {
  return createByteIteratorDecoderForMqttPacketBoolean();
}

