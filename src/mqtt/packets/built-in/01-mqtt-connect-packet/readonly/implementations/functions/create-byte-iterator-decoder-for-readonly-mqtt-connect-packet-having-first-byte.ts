import { u16, u8 } from '@lifaon/number-types';
import { IReadonlyStringBuffer } from '../../../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
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
  createByteIteratorDecoderForMqttPacketU16,
} from '../../../../../functions/shared/number/u16/create-byte-iterator-decoder-for-mqtt-packet-u16';
import { getByteLengthOfEncodedMqttPacketU16 } from '../../../../../functions/shared/number/u16/get-byte-length-of-encoded-mqtt-packet-u16';
import { getByteLengthOfEncodedMqttPacketU8 } from '../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import {
  createByteIteratorDecoderForMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-decoder-for-mqtt-packet-variable-byte-integer';
import { IVariableByteInteger } from '../../../../../functions/shared/number/variable-byte-integer/variable-byte-integer.type';
import {
  createByteIteratorDecoderForMqttPacketReadonlyStringBuffer,
} from '../../../../../functions/shared/string-buffer/create-byte-iterator-decoder-for-mqtt-packet-string-buffer';
import {
  getByteLengthOfEncodedMqttPacketReadonlyStringBuffer,
} from '../../../../../functions/shared/string-buffer/get-byte-length-of-encoded-mqtt-packet-string-buffer';
import { verifyRemainingPacketLength } from '../../../../../functions/shared/verify-remaining-packet-length';
import {
  createByteIteratorDecoderForReadonlyMqttConnectPacketWill,
} from '../../../components/mqtt-connect-packet-will/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-connect-packet-will';
import {
  getByteLengthOfEncodedReadonlyMqttConnectPacketWill,
} from '../../../components/mqtt-connect-packet-will/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-connect-packet-will';
import {
  IReadonlyMqttConnectPacketWill,
} from '../../../components/mqtt-connect-packet-will/readonly/readonly-mqtt-connect-packet-will.type';

import { IReadonlyMqttConnectPacket } from '../../readonly-mqtt-connect-packet.type';
import {
  IReadonlyMqttConnectPacketPropertyList,
} from '../../traits/get-properties/readonly-mqtt-connect-packet.get-properties.function-definition';
import {
  IReadonlyMqttConnectPacketProtocolName,
} from '../../traits/get-protocol-name/readonly-mqtt-connect-packet.get-protocol-name.function-definition';
import { createReadonlyMqttConnectPacket } from '../create-readonly-mqtt-connect-packet';

export function* createByteIteratorDecoderForReadonlyMqttConnectPacketHavingFirstByte(
  firstByte: u8,
): IByteIteratorDecoder<IReadonlyMqttConnectPacket> {
  if (firstByte !== 0b00010000) {
    throw new Error(`Not a CONNECT packet`);
  }

  let remainingPacketLength: IVariableByteInteger = yield* createByteIteratorDecoderForMqttPacketVariableByteInteger();

  // protocol's name
  const protocolNameReadonlyStringBuffer: IReadonlyStringBuffer = yield* createByteIteratorDecoderForMqttPacketReadonlyStringBuffer();
  const protocolName: IReadonlyMqttConnectPacketProtocolName = protocolNameReadonlyStringBuffer.toString() as IReadonlyMqttConnectPacketProtocolName;
  remainingPacketLength -= getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(protocolNameReadonlyStringBuffer);

  // protocol's version
  const protocolVersion: IMqttProtocolVersion = (yield) as IMqttProtocolVersion;
  remainingPacketLength -= getByteLengthOfEncodedMqttPacketU8();

  // flags
  const flagsByte: u8 = yield;
  const hasUsername: boolean = Boolean(flagsByte & 0b10000000);
  const hasPassword: boolean = Boolean(flagsByte & 0b01000000);
  const hasWill: boolean = Boolean(flagsByte & 0b00000100);
  const clean: boolean = Boolean(flagsByte & 0b00000010);
  remainingPacketLength -= getByteLengthOfEncodedMqttPacketU8();

  // keepalive
  const keepalive: u16 = yield* createByteIteratorDecoderForMqttPacketU16();
  remainingPacketLength -= getByteLengthOfEncodedMqttPacketU16();

  // V5: properties
  let properties: IReadonlyMqttConnectPacketPropertyList = EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT;
  if (protocolVersion === 5) {
    properties = yield* createByteIteratorDecoderForReadonlyMqttPacketPropertyList();
    remainingPacketLength -= getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength(properties);
  }

  // client's id
  const clientId: IReadonlyStringBuffer = yield* createByteIteratorDecoderForMqttPacketReadonlyStringBuffer();
  remainingPacketLength -= getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(clientId);

  // will
  let will: IReadonlyMqttConnectPacketWill | undefined;
  if (hasWill) {
    will = yield* createByteIteratorDecoderForReadonlyMqttConnectPacketWill(flagsByte, protocolVersion);
    remainingPacketLength -= getByteLengthOfEncodedReadonlyMqttConnectPacketWill(will, protocolVersion);
  }

  let username: IReadonlyStringBuffer | undefined;
  if (hasUsername) {
    username = yield* createByteIteratorDecoderForMqttPacketReadonlyStringBuffer();
    remainingPacketLength -= getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(username);
  }

  let password: IReadonlyStringBuffer | undefined;
  if (hasPassword) {
    password = yield* createByteIteratorDecoderForMqttPacketReadonlyStringBuffer();
    remainingPacketLength -= getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(password);
  }

  verifyRemainingPacketLength(remainingPacketLength);

  return createReadonlyMqttConnectPacket({
    protocolName,
    protocolVersion,
    clean,
    keepalive,
    properties,
    clientId,
    will,
    username,
    password,
  });
}

