import { IByteIteratorEncoder } from '../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttProtocolVersion } from '../../../../../../constants/mqtt-protocol-version.type';
import {
  createByteIteratorEncoderForReadonlyMqttPacketId,
} from '../../../../../components/mqtt-packet-id/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-packet-id';
import {
  getByteLengthOfEncodedReadonlyMqttPacketId,
} from '../../../../../components/mqtt-packet-id/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-id';
import { IReadonlyMqttPacketId } from '../../../../../components/mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';
import {
  createByteIteratorEncoderForReadonlyMqttPacketPropertyList,
} from '../../../../../components/mqtt-packet-property-list/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-packet-property-list';
import {
  getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength,
} from '../../../../../components/mqtt-packet-property-list/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-property-list-with-length';
import {
  createByteIteratorEncoderForMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-encoder-for-mqtt-packet-variable-byte-integer';
import { IVariableByteInteger } from '../../../../../functions/shared/number/variable-byte-integer/variable-byte-integer.type';
import {
  createByteIteratorEncoderForReadonlyMqttSubscribePacketSubscriptionList,
} from '../../../components/mqtt-subscribe-packet-subscription/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-subscribe-packet-subscription-list';
import {
  getByteLengthOfEncodedReadonlyMqttSubscribePacketSubscriptionList,
} from '../../../components/mqtt-subscribe-packet-subscription/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-subscribe-packet-subscription-list';
import {
  IReadonlyMqttSubscribePacketSubscription,
} from '../../../components/mqtt-subscribe-packet-subscription/readonly/readonly-mqtt-subscribe-packet-subscription.type';
import { IReadonlyMqttSubscribePacket } from '../../readonly-mqtt-subscribe-packet.type';
import {
  IReadonlyMqttSubscribePacketPropertyList,
} from '../../traits/get-properties/readonly-mqtt-subscribe-packet.get-properties.function-definition';

export function* createByteIteratorEncoderForReadonlyMqttSubscribePacket(
  {
    getPacketId,
    getProperties,
    getSubscriptions,
  }: IReadonlyMqttSubscribePacket,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorEncoder {
  const packetId: IReadonlyMqttPacketId = getPacketId();
  const properties: IReadonlyMqttSubscribePacketPropertyList = getProperties();
  const subscriptions: readonly IReadonlyMqttSubscribePacketSubscription[] = getSubscriptions();

  /* COMPUTE PACKET'S LENGTH */

  let packetLength: IVariableByteInteger = 0;

  packetLength += getByteLengthOfEncodedReadonlyMqttPacketId(packetId); // packet id

  // V5: properties
  if (protocolVersion === 5) {
    packetLength += getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength(properties);
  }

  // subscriptions
  packetLength += getByteLengthOfEncodedReadonlyMqttSubscribePacketSubscriptionList(subscriptions);

  /* WRITE PACKET'S CONTENT */

  yield 0b10000010; // fixed header
  yield* createByteIteratorEncoderForMqttPacketVariableByteInteger(packetLength); // length
  yield* createByteIteratorEncoderForReadonlyMqttPacketId(packetId); // packet id

  // V5: properties
  if (protocolVersion === 5) {
    yield* createByteIteratorEncoderForReadonlyMqttPacketPropertyList(properties);
  }

  // subscriptions
  yield* createByteIteratorEncoderForReadonlyMqttSubscribePacketSubscriptionList(subscriptions);
}

