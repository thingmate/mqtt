import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import { MQTT_PACKET_SERVER_REFERENCE_PROPERTY_CODE } from '../../constants/mqtt-packet-server-reference-property-code.constant';
import { IMqttPacketServerReferenceProperty } from '../../mqtt-packet-server-reference-property.type';
import { createMqttPacketServerReferenceProperty } from '../create-mqtt-packet-server-reference-property';
import {
  createByteIteratorDecoderForMqttPacketServerReferencePropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-server-reference-property-value';

export function* createByteIteratorDecoderForMqttPacketServerReferencePropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketServerReferenceProperty> {
  if (firstByte !== MQTT_PACKET_SERVER_REFERENCE_PROPERTY_CODE) {
    throw new Error(`Not a ServerReference property`);
  }
  return createMqttPacketServerReferenceProperty(
    yield* createByteIteratorDecoderForMqttPacketServerReferencePropertyValue(),
  );
}

