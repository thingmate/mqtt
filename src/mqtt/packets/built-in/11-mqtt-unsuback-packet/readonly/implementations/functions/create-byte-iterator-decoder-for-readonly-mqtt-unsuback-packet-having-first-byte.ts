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
  createMqttPacketUnsubackReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/11-unsuback/create-mqtt-packet-unsuback-reason';
import {
  IGenericMqttPacketUnsubackReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/11-unsuback/mqtt-packet-unsuback-reason.type';

import { getByteLengthOfEncodedMqttPacketU8 } from '../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import {
  createByteIteratorDecoderForMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-decoder-for-mqtt-packet-variable-byte-integer';
import { IVariableByteInteger } from '../../../../../functions/shared/number/variable-byte-integer/variable-byte-integer.type';
import { verifyRemainingPacketLength } from '../../../../../functions/shared/verify-remaining-packet-length';
import { IReadonlyMqttUnsubackPacket } from '../../readonly-mqtt-unsuback-packet.type';
import {
  IReadonlyMqttUnsubackPacketPropertyList,
} from '../../traits/get-properties/readonly-mqtt-unsuback-packet.get-properties.function-definition';
import { createReadonlyMqttUnsubackPacket } from '../create-readonly-mqtt-unsuback-packet';

export function* createByteIteratorDecoderForReadonlyMqttUnsubackPacketHavingFirstByte(
  firstByte: u8,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttUnsubackPacket> {
  if (firstByte !== 0b10110000) {
    throw new Error(`Not a UNSUBACK packet`);
  }

  let remainingPacketLength: IVariableByteInteger = yield* createByteIteratorDecoderForMqttPacketVariableByteInteger();

  // packet id
  const packetId: IReadonlyMqttPacketId = yield* createByteIteratorDecoderForReadonlyMqttPacketId();
  remainingPacketLength -= getByteLengthOfEncodedReadonlyMqttPacketId(packetId);

  // V5: properties
  let properties: IReadonlyMqttUnsubackPacketPropertyList = EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT;
  if (protocolVersion === 5) {
    properties = yield* createByteIteratorDecoderForReadonlyMqttPacketPropertyList();
    remainingPacketLength -= getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength(properties);
  }

  // reason code
  const reason: IGenericMqttPacketUnsubackReason = createMqttPacketUnsubackReason(yield);
  remainingPacketLength -= getByteLengthOfEncodedMqttPacketU8();

  verifyRemainingPacketLength(remainingPacketLength);

  return createReadonlyMqttUnsubackPacket({
    packetId,
    properties,
    reason,
  });
}

