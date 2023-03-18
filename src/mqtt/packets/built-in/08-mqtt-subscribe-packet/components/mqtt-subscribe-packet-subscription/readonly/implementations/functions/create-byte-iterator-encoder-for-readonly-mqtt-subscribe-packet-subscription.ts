import { IByteIteratorEncoder } from '../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForReadonlyMqttPacketTopic,
} from '../../../../../../../components/mqtt-packet-topic/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-packet-topic';
import { IReadonlyMqttSubscribePacketSubscription } from '../../readonly-mqtt-subscribe-packet-subscription.type';

export function* createByteIteratorEncoderForReadonlyMqttSubscribePacketSubscription(
  {
    getTopic,
    getQoS,
    getNoLocal,
    getRetainAsPublished,
    getRetainHandling,
  }: IReadonlyMqttSubscribePacketSubscription,
): IByteIteratorEncoder {
  yield* createByteIteratorEncoderForReadonlyMqttPacketTopic(getTopic()); // topic
  // options
  yield (
    getQoS()
    | (getNoLocal() ? 0b00000100 : 0)
    | (getRetainAsPublished() ? 0b00001000 : 0)
    | (getRetainHandling() << 4)
  );
}

