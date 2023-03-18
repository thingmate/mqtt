import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import { MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_CODE } from '../../constants/mqtt-packet-receive-maximum-property-code.constant';
import { IMqttPacketReceiveMaximumProperty } from '../../mqtt-packet-receive-maximum-property.type';
import { createMqttPacketReceiveMaximumProperty } from '../create-mqtt-packet-receive-maximum-property';
import {
  createByteIteratorDecoderForMqttPacketReceiveMaximumPropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-receive-maximum-property-value';

export function* createByteIteratorDecoderForMqttPacketReceiveMaximumPropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketReceiveMaximumProperty> {
  if (firstByte !== MQTT_PACKET_RECEIVE_MAXIMUM_PROPERTY_CODE) {
    throw new Error(`Not a ReceiveMaximum property`);
  }
  return createMqttPacketReceiveMaximumProperty(
    yield* createByteIteratorDecoderForMqttPacketReceiveMaximumPropertyValue(),
  );
}

