import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import {
  createByteIteratorDecoderForReadonlyMqttPacketId,
} from '../../../../../components/mqtt-packet-id/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-packet-id';
import {
  getByteLengthOfEncodedReadonlyMqttPacketId,
} from '../../../../../components/mqtt-packet-id/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-id';
import { IReadonlyMqttPacketId } from '../../../../../components/mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';
import {
  EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT,
} from '../../../../../components/mqtt-packet-property-list/readonly/constants/empty-readonly-mqtt-packet-property-list.constant';
import {
  createByteIteratorDecoderForReadonlyMqttPacketPropertyList,
} from '../../../../../components/mqtt-packet-property-list/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-packet-property-list';
import {
  getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength,
} from '../../../../../components/mqtt-packet-property-list/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-property-list-with-length';
import {
  createMqttPacketSubackReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/09-suback/create-mqtt-packet-suback-reason';
import {
  IGenericMqttPacketSubackReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/09-suback/mqtt-packet-suback-reason.type';

import {
  createByteIteratorDecoderForMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-decoder-for-mqtt-packet-variable-byte-integer';
import { IVariableByteInteger } from '../../../../../functions/shared/number/variable-byte-integer/variable-byte-integer.type';
import { verifyRemainingPacketLength } from '../../../../../functions/shared/verify-remaining-packet-length';
import { IReadonlyMqttSubackPacket } from '../../readonly-mqtt-suback-packet.type';
import {
  IReadonlyMqttSubackPacketPropertyList,
} from '../../traits/get-properties/readonly-mqtt-suback-packet.get-properties.function-definition';
import { createReadonlyMqttSubackPacket } from '../create-readonly-mqtt-suback-packet';

export function* createByteIteratorDecoderForReadonlyMqttSubackPacketHavingFirstByte(
  firstByte: u8,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttSubackPacket> {
  if (firstByte !== 0b10010000) {
    throw new Error(`Not a SUBACK packet`);
  }

  let remainingPacketLength: IVariableByteInteger = yield* createByteIteratorDecoderForMqttPacketVariableByteInteger();

  // packet id
  const packetId: IReadonlyMqttPacketId = yield* createByteIteratorDecoderForReadonlyMqttPacketId();
  remainingPacketLength -= getByteLengthOfEncodedReadonlyMqttPacketId(packetId);

  // V5: properties
  let properties: IReadonlyMqttSubackPacketPropertyList = EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT;
  if (protocolVersion === 5) {
    properties = yield* createByteIteratorDecoderForReadonlyMqttPacketPropertyList();
    remainingPacketLength -= getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength(properties);
  }

  // reason codes
  const reasons: IGenericMqttPacketSubackReason[] = new Array<IGenericMqttPacketSubackReason>(remainingPacketLength);
  for (let i = 0; i < remainingPacketLength; i++) {
    reasons[i] = createMqttPacketSubackReason(yield);
  }
  remainingPacketLength -= remainingPacketLength;

  verifyRemainingPacketLength(remainingPacketLength);

  return createReadonlyMqttSubackPacket({
    packetId,
    properties,
    reasons,
  });
}

