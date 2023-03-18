import { u16 } from '@lifaon/number-types';
import { IReadonlyStringBuffer } from '../../../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import { IByteIteratorEncoder } from '../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import {
  createByteIteratorEncoderForReadonlyMqttPacketPropertyList,
} from '../../../../../components/mqtt-packet-property-list/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-packet-property-list';
import {
  getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength,
} from '../../../../../components/mqtt-packet-property-list/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-property-list-with-length';
import {
  createByteIteratorEncoderForMqttPacketU16,
} from '../../../../../functions/shared/number/u16/create-byte-iterator-encoder-for-mqtt-packet-u16';
import { getByteLengthOfEncodedMqttPacketU16 } from '../../../../../functions/shared/number/u16/get-byte-length-of-encoded-mqtt-packet-u16';
import { getByteLengthOfEncodedMqttPacketU8 } from '../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import {
  createByteIteratorEncoderForMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-encoder-for-mqtt-packet-variable-byte-integer';
import { IVariableByteInteger } from '../../../../../functions/shared/number/variable-byte-integer/variable-byte-integer.type';
import {
  createByteIteratorEncoderForMqttPacketReadonlyStringBuffer,
} from '../../../../../functions/shared/string-buffer/create-byte-iterator-encoder-for-mqtt-packet-string-buffer';
import {
  getByteLengthOfEncodedMqttPacketReadonlyStringBuffer,
} from '../../../../../functions/shared/string-buffer/get-byte-length-of-encoded-mqtt-packet-string-buffer';
import {
  createByteIteratorEncoderForReadonlyMqttConnectPacketWill,
} from '../../../components/mqtt-connect-packet-will/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-connect-packet-will';
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
import { readonlyMqttConnectPacketProtocolNameToReadonlyStringBuffer } from './readonly-mqtt-connect-packet-protocol-name-to-string-buffer';

export function* createByteIteratorEncoderForReadonlyMqttConnectPacket(
  {
    getProtocolName,
    getProtocolVersion,
    getClean,
    getKeepalive,
    getProperties,
    getClientId,
    getWill,
    getUsername,
    getPassword,
  }: IReadonlyMqttConnectPacket,
): IByteIteratorEncoder {
  const protocolName: IReadonlyStringBuffer = readonlyMqttConnectPacketProtocolNameToReadonlyStringBuffer(getProtocolName());
  const protocolVersion: IMqttProtocolVersion = getProtocolVersion();
  const clean: boolean = getClean();
  const keepalive: u16 = getKeepalive();
  const properties: IReadonlyMqttConnectPacketPropertyList = getProperties();
  const clientId: IReadonlyStringBuffer = getClientId();
  const will: IReadonlyMqttConnectPacketWill | undefined = getWill();
  const username: IReadonlyStringBuffer | undefined = getUsername();
  const password: IReadonlyStringBuffer | undefined = getPassword();

  /* COMPUTE PACKET'S LENGTH */

  let packetLength: IVariableByteInteger = 0;

  packetLength += getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(protocolName); // protocol's name
  packetLength += getByteLengthOfEncodedMqttPacketU8(); // protocol's version
  packetLength += getByteLengthOfEncodedMqttPacketU8(); // flags
  packetLength += getByteLengthOfEncodedMqttPacketU16(); // keepalive

  // V5: properties
  if (protocolVersion === 5) {
    packetLength += getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength(properties);
  }

  packetLength += getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(clientId); // client's id

  // will
  if (will !== void 0) {
    packetLength += getByteLengthOfEncodedReadonlyMqttConnectPacketWill(will, protocolVersion);
  }

  // username
  if (username !== void 0) {
    packetLength += getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(username);
  }

  // password
  if (password !== void 0) {
    packetLength += getByteLengthOfEncodedMqttPacketReadonlyStringBuffer(password);
  }

  /* WRITE PACKET'S CONTENT */

  yield 0b00010000; // fixed header
  yield* createByteIteratorEncoderForMqttPacketVariableByteInteger(packetLength); // length
  yield* createByteIteratorEncoderForMqttPacketReadonlyStringBuffer(protocolName); // protocol's name
  yield protocolVersion; // protocol's version

  // flags
  yield (
    (username ? 0b10000000 : 0)
    | (password ? 0b01000000 : 0)
    | (
      (will == void 0)
        ? 0
        : (
          (will.getRetain() ? 0b00100000 : 0)
          | (will.getQoS() << 3)
          | 0b00000100
        )
    )
    | (clean ? 0b00000010 : 0)
  );

  yield* createByteIteratorEncoderForMqttPacketU16(keepalive); // keepalive

  // V5: properties
  if (protocolVersion === 5) {
    yield* createByteIteratorEncoderForReadonlyMqttPacketPropertyList(properties);
  }

  yield* createByteIteratorEncoderForMqttPacketReadonlyStringBuffer(clientId); // client's id

  // will
  if (will !== void 0) {
    yield* createByteIteratorEncoderForReadonlyMqttConnectPacketWill(will, protocolVersion);
  }

  // username
  if (username !== void 0) {
    yield* createByteIteratorEncoderForMqttPacketReadonlyStringBuffer(username);
  }

  // password
  if (password !== void 0) {
    yield* createByteIteratorEncoderForMqttPacketReadonlyStringBuffer(password);
  }
}

