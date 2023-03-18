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
  createMqttPacketConnackReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/02-connack/create-mqtt-packet-connack-reason';
import {
  IGenericMqttPacketConnackReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/02-connack/mqtt-packet-connack-reason.type';

import { getByteLengthOfEncodedMqttPacketU8 } from '../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import {
  createByteIteratorDecoderForMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-decoder-for-mqtt-packet-variable-byte-integer';
import { IVariableByteInteger } from '../../../../../functions/shared/number/variable-byte-integer/variable-byte-integer.type';
import { verifyRemainingPacketLength } from '../../../../../functions/shared/verify-remaining-packet-length';
import { IReadonlyMqttConnackPacket } from '../../readonly-mqtt-connack-packet.type';
import {
  IReadonlyMqttConnackPacketPropertyList,
} from '../../traits/get-properties/readonly-mqtt-connack-packet.get-properties.function-definition';
import { createReadonlyMqttConnackPacket } from '../create-readonly-mqtt-connack-packet';

export function* createByteIteratorDecoderForReadonlyMqttConnackPacketHavingFirstByte(
  firstByte: u8,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttConnackPacket> {
  if (firstByte !== 0b00100000) {
    throw new Error(`Not a CONNACK packet`);
  }

  let remainingPacketLength: IVariableByteInteger = yield* createByteIteratorDecoderForMqttPacketVariableByteInteger();

  // session present
  const sessionPresent: boolean = (yield) === 0b00000001;
  remainingPacketLength -= getByteLengthOfEncodedMqttPacketU8();

  // reason
  // INFO always present unlike PUBACK
  const reason: IGenericMqttPacketConnackReason = createMqttPacketConnackReason(yield);
  remainingPacketLength -= getByteLengthOfEncodedMqttPacketU8();

  // V5: properties
  let properties: IReadonlyMqttConnackPacketPropertyList = EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT;
  if (protocolVersion === 5) {
    // INFO always present unlike PUBACK
    properties = yield* createByteIteratorDecoderForReadonlyMqttPacketPropertyList();
    remainingPacketLength -= getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength(properties);
  }

  verifyRemainingPacketLength(remainingPacketLength);

  return createReadonlyMqttConnackPacket({
    sessionPresent,
    reason,
    properties,
  });
}

