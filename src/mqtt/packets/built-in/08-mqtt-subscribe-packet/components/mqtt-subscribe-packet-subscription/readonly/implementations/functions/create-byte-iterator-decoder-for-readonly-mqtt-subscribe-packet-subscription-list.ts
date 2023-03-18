import { IByteIteratorDecoder } from '../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import { IReadonlyMqttSubscribePacketSubscription } from '../../readonly-mqtt-subscribe-packet-subscription.type';
import {
  createByteIteratorDecoderForReadonlyMqttSubscribePacketSubscription,
} from './create-byte-iterator-decoder-for-readonly-mqtt-subscribe-packet-subscription';
import {
  getByteLengthOfEncodedReadonlyMqttSubscribePacketSubscription,
} from './get-byte-length-of-encoded-readonly-mqtt-subscribe-packet-subscription';

export function* createByteIteratorDecoderForReadonlyMqttSubscribePacketSubscriptionList(
  remainingPacketLength: number,
): IByteIteratorDecoder<IReadonlyMqttSubscribePacketSubscription[]> {
  const subscriptions: IReadonlyMqttSubscribePacketSubscription[] = [];

  while (remainingPacketLength > 0) {
    const subscription: IReadonlyMqttSubscribePacketSubscription = yield* createByteIteratorDecoderForReadonlyMqttSubscribePacketSubscription();
    remainingPacketLength -= getByteLengthOfEncodedReadonlyMqttSubscribePacketSubscription(subscription);
  }

  return subscriptions;
}

