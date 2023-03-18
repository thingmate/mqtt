import { IByteIteratorEncoder } from '../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IReadonlyMqttSubscribePacketSubscription } from '../../readonly-mqtt-subscribe-packet-subscription.type';
import {
  createByteIteratorEncoderForReadonlyMqttSubscribePacketSubscription,
} from './create-byte-iterator-encoder-for-readonly-mqtt-subscribe-packet-subscription';

export function* createByteIteratorEncoderForReadonlyMqttSubscribePacketSubscriptionList(
  subscriptions: readonly IReadonlyMqttSubscribePacketSubscription[],
): IByteIteratorEncoder {
  for (let i = 0, l = subscriptions.length; i < l; i++) {
    yield* createByteIteratorEncoderForReadonlyMqttSubscribePacketSubscription(subscriptions[i]);
  }
}


