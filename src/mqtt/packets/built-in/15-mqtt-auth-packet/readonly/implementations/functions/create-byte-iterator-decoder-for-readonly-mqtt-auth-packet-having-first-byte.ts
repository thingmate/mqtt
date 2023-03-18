import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../misc/codec/byte-iterator-decoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
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
  createMqttPacketAuthReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/15-auth/create-mqtt-packet-auth-reason';
import {
  IGenericMqttPacketAuthReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/15-auth/mqtt-packet-auth-reason.type';
import {
  STATIC_MQTT_PACKET_AUTH_REASON_SUCCESS,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/15-auth/static-mqtt-packet-auth-reason-success.constant';

import { getByteLengthOfEncodedMqttPacketU8 } from '../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import {
  createByteIteratorDecoderForMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-decoder-for-mqtt-packet-variable-byte-integer';
import { IVariableByteInteger } from '../../../../../functions/shared/number/variable-byte-integer/variable-byte-integer.type';
import { verifyRemainingPacketLength } from '../../../../../functions/shared/verify-remaining-packet-length';
import { IReadonlyMqttAuthPacket } from '../../readonly-mqtt-auth-packet.type';
import {
  IReadonlyMqttAuthPacketPropertyList,
} from '../../traits/get-properties/readonly-mqtt-auth-packet.get-properties.function-definition';
import { createReadonlyMqttAuthPacket } from '../create-readonly-mqtt-auth-packet';

export function* createByteIteratorDecoderForReadonlyMqttAuthPacketHavingFirstByte(
  firstByte: u8,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttAuthPacket> {
  if (firstByte !== 0b11110000) {
    throw new Error(`Not an AUTH packet`);
  }

  let remainingPacketLength: IVariableByteInteger = yield* createByteIteratorDecoderForMqttPacketVariableByteInteger();

  // reason
  let reason: IGenericMqttPacketAuthReason = STATIC_MQTT_PACKET_AUTH_REASON_SUCCESS;
  if (remainingPacketLength > 0) {
    reason = createMqttPacketAuthReason(yield);
    remainingPacketLength -= getByteLengthOfEncodedMqttPacketU8();
  }

  // V5: properties
  let properties: IReadonlyMqttAuthPacketPropertyList = EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT;
  if (
    (protocolVersion === 5)
    && (remainingPacketLength > 0)
  ) {
    properties = yield* createByteIteratorDecoderForReadonlyMqttPacketPropertyList();
    remainingPacketLength -= getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength(properties);
  }

  verifyRemainingPacketLength(remainingPacketLength);

  return createReadonlyMqttAuthPacket({
    reason,
    properties,
  });
}

