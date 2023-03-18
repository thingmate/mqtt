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
  createMqttPacketDisconnectReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/14-disconnect/create-mqtt-packet-disconnect-reason';
import {
  IGenericMqttPacketDisconnectReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/14-disconnect/mqtt-packet-disconnect-reason.type';
import {
  STATIC_MQTT_PACKET_DISCONNECT_REASON_SUCCESS,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/14-disconnect/static-mqtt-packet-disconnect-reason-success.constant';

import { getByteLengthOfEncodedMqttPacketU8 } from '../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import {
  createByteIteratorDecoderForMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-decoder-for-mqtt-packet-variable-byte-integer';
import { IVariableByteInteger } from '../../../../../functions/shared/number/variable-byte-integer/variable-byte-integer.type';
import { verifyRemainingPacketLength } from '../../../../../functions/shared/verify-remaining-packet-length';
import { IReadonlyMqttDisconnectPacket } from '../../readonly-mqtt-disconnect-packet.type';
import {
  IReadonlyMqttDisconnectPacketPropertyList,
} from '../../traits/get-properties/readonly-mqtt-disconnect-packet.get-properties.function-definition';
import { createReadonlyMqttDisconnectPacket } from '../create-readonly-mqtt-disconnect-packet';

export function* createByteIteratorDecoderForReadonlyMqttDisconnectPacketHavingFirstByte(
  firstByte: u8,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttDisconnectPacket> {
  if (firstByte !== 0b11100000) {
    throw new Error(`Not a DISCONNECT packet`);
  }

  let remainingPacketLength: IVariableByteInteger = yield* createByteIteratorDecoderForMqttPacketVariableByteInteger();

  // reason
  let reason: IGenericMqttPacketDisconnectReason = STATIC_MQTT_PACKET_DISCONNECT_REASON_SUCCESS;
  if (remainingPacketLength > 0) {
    reason = createMqttPacketDisconnectReason(yield);
    remainingPacketLength -= getByteLengthOfEncodedMqttPacketU8();
  }

  // V5: properties
  let properties: IReadonlyMqttDisconnectPacketPropertyList = EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT;
  if (
    (protocolVersion === 5)
    && (remainingPacketLength > 0)
  ) {
    properties = yield* createByteIteratorDecoderForReadonlyMqttPacketPropertyList();
    remainingPacketLength -= getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength(properties);
  }

  verifyRemainingPacketLength(remainingPacketLength);

  return createReadonlyMqttDisconnectPacket({
    reason,
    properties,
  });
}

