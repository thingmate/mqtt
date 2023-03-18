import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_CODE,
} from '../../constants/mqtt-packet-assigned-client-identifier-property-code.constant';
import { IMqttPacketAssignedClientIdentifierProperty } from '../../mqtt-packet-assigned-client-identifier-property.type';
import { createMqttPacketAssignedClientIdentifierProperty } from '../create-mqtt-packet-assigned-client-identifier-property';
import {
  createByteIteratorDecoderForMqttPacketAssignedClientIdentifierPropertyValue,
} from './create-byte-iterator-decoder-for-mqtt-packet-assigned-client-identifier-property-value';

export function* createByteIteratorDecoderForMqttPacketAssignedClientIdentifierPropertyHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IMqttPacketAssignedClientIdentifierProperty> {
  if (firstByte !== MQTT_PACKET_ASSIGNED_CLIENT_IDENTIFIER_PROPERTY_CODE) {
    throw new Error(`Not a AssignedClientIdentifier property`);
  }
  return createMqttPacketAssignedClientIdentifierProperty(
    yield* createByteIteratorDecoderForMqttPacketAssignedClientIdentifierPropertyValue(),
  );
}

