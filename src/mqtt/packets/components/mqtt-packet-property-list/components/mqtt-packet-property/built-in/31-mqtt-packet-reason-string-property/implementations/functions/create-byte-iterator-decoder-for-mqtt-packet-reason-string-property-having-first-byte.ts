import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import { MQTT_PACKET_REASON_STRING_PROPERTY_CODE } from '../../constants/mqtt-packet-reason-string-property-code.constant';
import { IMqttPacketReasonStringProperty } from '../../mqtt-packet-reason-string-property.type';
import { createMqttPacketReasonStringProperty } from '../create-mqtt-packet-reason-string-property';
import {
  createByteIteratorDecoderForMqttPacketReasonStringPropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-reason-string-property-value';

export function* createByteIteratorDecoderForMqttPacketReasonStringPropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketReasonStringProperty> {
  if (firstByte !== MQTT_PACKET_REASON_STRING_PROPERTY_CODE) {
    throw new Error(`Not a ReasonString property`);
  }
  return createMqttPacketReasonStringProperty(
    yield* createByteIteratorDecoderForMqttPacketReasonStringPropertyValue(),
  );
}

