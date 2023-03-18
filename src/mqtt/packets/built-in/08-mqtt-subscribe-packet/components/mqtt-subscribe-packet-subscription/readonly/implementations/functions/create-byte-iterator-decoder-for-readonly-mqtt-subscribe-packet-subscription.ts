import { u8 } from '@lifaon/number-types';
import { IByteIteratorDecoder } from '../../../../../../../../../misc/codec/byte-iterator-decoder.type';
import { QOS } from '../../../../../../../../constants/qos.enum';
import {
  createByteIteratorDecoderForReadonlyMqttPacketTopic,
} from '../../../../../../../components/mqtt-packet-topic/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-packet-topic';
import { IReadonlyMqttPacketTopic } from '../../../../../../../components/mqtt-packet-topic/readonly/readonly-mqtt-packet-topic.type';
import { IReadonlyMqttSubscribePacketSubscription } from '../../readonly-mqtt-subscribe-packet-subscription.type';
import {
  MQTT_SUBSCRIBE_PACKET_SUBSCRIPTION_RETAIN_HANDLING,
} from '../../traits/get-retain-handling/mqtt-subscribe-packet-subscription-retain-handling.enum';
import { createReadonlyMqttSubscribePacketSubscription } from '../create-readonly-mqtt-subscribe-packet-subscription';

export function* createByteIteratorDecoderForReadonlyMqttSubscribePacketSubscription(): IByteIteratorDecoder<IReadonlyMqttSubscribePacketSubscription> {
  // topic
  const topic: IReadonlyMqttPacketTopic = yield* createByteIteratorDecoderForReadonlyMqttPacketTopic();

  // options
  const optionsByte: u8 = yield;
  const qos: QOS = optionsByte & 0b00000011;
  const noLocal: boolean = Boolean(optionsByte & 0b00000100);
  const retainAsPublished: boolean = Boolean(optionsByte & 0b00001000);
  const retainHandling: MQTT_SUBSCRIBE_PACKET_SUBSCRIPTION_RETAIN_HANDLING = (optionsByte & 0b11110000) >> 4;

  return createReadonlyMqttSubscribePacketSubscription({
    topic,
    qos,
    noLocal,
    retainAsPublished,
    retainHandling,
  });
}

