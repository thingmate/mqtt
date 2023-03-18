import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_CODE,
} from '../../constants/mqtt-packet-request-problem-information-property-code.constant';
import { IMqttPacketRequestProblemInformationProperty } from '../../mqtt-packet-request-problem-information-property.type';
import { createMqttPacketRequestProblemInformationProperty } from '../create-mqtt-packet-request-problem-information-property';
import {
  createByteIteratorDecoderForMqttPacketRequestProblemInformationPropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-request-problem-information-property-value';

export function* createByteIteratorDecoderForMqttPacketRequestProblemInformationPropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketRequestProblemInformationProperty> {
  if (firstByte !== MQTT_PACKET_REQUEST_PROBLEM_INFORMATION_PROPERTY_CODE) {
    throw new Error(`Not a RequestProblemInformation property`);
  }
  return createMqttPacketRequestProblemInformationProperty(
    yield* createByteIteratorDecoderForMqttPacketRequestProblemInformationPropertyValue(),
  );
}

