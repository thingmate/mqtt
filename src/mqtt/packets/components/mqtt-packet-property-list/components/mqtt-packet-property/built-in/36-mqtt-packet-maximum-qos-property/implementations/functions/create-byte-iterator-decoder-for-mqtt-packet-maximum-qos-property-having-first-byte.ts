import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import { MQTT_PACKET_MAXIMUM_QOS_PROPERTY_CODE } from '../../constants/mqtt-packet-maximum-qos-property-code.constant';
import { IMqttPacketMaximumQoSProperty } from '../../mqtt-packet-maximum-qos-property.type';
import { createMqttPacketMaximumQoSProperty } from '../create-mqtt-packet-maximum-qos-property';
import {
  createByteIteratorDecoderForMqttPacketMaximumQoSPropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-maximum-qos-property-value';

export function* createByteIteratorDecoderForMqttPacketMaximumQoSPropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketMaximumQoSProperty> {
  if (firstByte !== MQTT_PACKET_MAXIMUM_QOS_PROPERTY_CODE) {
    throw new Error(`Not a MaximumQoS property`);
  }
  return createMqttPacketMaximumQoSProperty(
    yield* createByteIteratorDecoderForMqttPacketMaximumQoSPropertyValue(),
  );
}

