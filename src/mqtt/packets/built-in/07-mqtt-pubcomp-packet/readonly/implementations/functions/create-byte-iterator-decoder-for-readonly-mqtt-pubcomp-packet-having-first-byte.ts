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
  createMqttPacketPubcompReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/07-pubcomp/create-mqtt-packet-pubcomp-reason';
import {
  IGenericMqttPacketPubcompReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/07-pubcomp/mqtt-packet-pubcomp-reason.type';
import {
  STATIC_MQTT_PACKET_PUBCOMP_REASON_SUCCESS,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/07-pubcomp/static-mqtt-packet-pubcomp-reason-success.constant';
import { getByteLengthOfEncodedMqttPacketU8 } from '../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import {
  createByteIteratorDecoderForMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-decoder-for-mqtt-packet-variable-byte-integer';
import { IVariableByteInteger } from '../../../../../functions/shared/number/variable-byte-integer/variable-byte-integer.type';
import { verifyRemainingPacketLength } from '../../../../../functions/shared/verify-remaining-packet-length';
import { IReadonlyMqttPubcompPacket } from '../../readonly-mqtt-pubcomp-packet.type';
import {
  IReadonlyMqttPubcompPacketPropertyList,
} from '../../traits/get-properties/readonly-mqtt-pubcomp-packet.get-properties.function-definition';
import { createReadonlyMqttPubcompPacket } from '../create-readonly-mqtt-pubcomp-packet';

export function* createByteIteratorDecoderForReadonlyMqttPubcompPacketHavingFirstByte(
  firstByte: u8,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttPubcompPacket> {
  if (firstByte !== 0b01110000) {
    throw new Error(`Not a PUBCOMP packet`);
  }

  let remainingPacketLength: IVariableByteInteger = yield* createByteIteratorDecoderForMqttPacketVariableByteInteger();

  // packet id
  const packetId: IReadonlyMqttPacketId = yield* createByteIteratorDecoderForReadonlyMqttPacketId();
  remainingPacketLength -= getByteLengthOfEncodedReadonlyMqttPacketId(packetId);

  // reason
  let reason: IGenericMqttPacketPubcompReason = STATIC_MQTT_PACKET_PUBCOMP_REASON_SUCCESS;
  if (remainingPacketLength > 0) {
    reason = createMqttPacketPubcompReason(yield);
    remainingPacketLength -= getByteLengthOfEncodedMqttPacketU8();
  }

  // V5: properties
  let properties: IReadonlyMqttPubcompPacketPropertyList = EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT;
  if (
    (protocolVersion === 5)
    && (remainingPacketLength > 0)
  ) {
    properties = yield* createByteIteratorDecoderForReadonlyMqttPacketPropertyList();
    remainingPacketLength -= getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength(properties);
  }

  verifyRemainingPacketLength(remainingPacketLength);

  return createReadonlyMqttPubcompPacket({
    packetId,
    reason,
    properties,
  });
}

