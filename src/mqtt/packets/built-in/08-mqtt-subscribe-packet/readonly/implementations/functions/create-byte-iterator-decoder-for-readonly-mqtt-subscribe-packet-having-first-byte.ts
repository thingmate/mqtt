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
  createByteIteratorDecoderForMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-decoder-for-mqtt-packet-variable-byte-integer';
import { IVariableByteInteger } from '../../../../../functions/shared/number/variable-byte-integer/variable-byte-integer.type';
import {
  createByteIteratorDecoderForReadonlyMqttSubscribePacketSubscriptionList,
} from '../../../components/mqtt-subscribe-packet-subscription/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-subscribe-packet-subscription-list';
import {
  IReadonlyMqttSubscribePacketSubscription,
} from '../../../components/mqtt-subscribe-packet-subscription/readonly/readonly-mqtt-subscribe-packet-subscription.type';
import { IReadonlyMqttSubscribePacket } from '../../readonly-mqtt-subscribe-packet.type';
import {
  IReadonlyMqttSubscribePacketPropertyList,
} from '../../traits/get-properties/readonly-mqtt-subscribe-packet.get-properties.function-definition';
import { createReadonlyMqttSubscribePacket } from '../create-readonly-mqtt-subscribe-packet';

export function* createByteIteratorDecoderForReadonlyMqttSubscribePacketHavingFirstByte(
  firstByte: u8,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorDecoder<IReadonlyMqttSubscribePacket> {
  if (firstByte !== 0b10000010) {
    throw new Error(`Not a SUBSCRIBE packet`);
  }

  let remainingPacketLength: IVariableByteInteger = yield* createByteIteratorDecoderForMqttPacketVariableByteInteger();

  // packet id
  const packetId: IReadonlyMqttPacketId = yield* createByteIteratorDecoderForReadonlyMqttPacketId();
  remainingPacketLength -= getByteLengthOfEncodedReadonlyMqttPacketId(packetId);

  // V5: properties
  let properties: IReadonlyMqttSubscribePacketPropertyList = EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT;
  if (protocolVersion === 5) {
    properties = yield* createByteIteratorDecoderForReadonlyMqttPacketPropertyList();
    remainingPacketLength -= getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength(properties);
  }

  // subscriptions
  const subscriptions: IReadonlyMqttSubscribePacketSubscription[] = yield* createByteIteratorDecoderForReadonlyMqttSubscribePacketSubscriptionList(remainingPacketLength);
  // remainingPacketLength -= getByteLengthOfEncodedReadonlyMqttSubscribePacketSubscriptionList(subscriptions)

  // verifyRemainingPacketLength(remainingPacketLength);

  return createReadonlyMqttSubscribePacket({
    packetId,
    properties,
    subscriptions,
  });
}

