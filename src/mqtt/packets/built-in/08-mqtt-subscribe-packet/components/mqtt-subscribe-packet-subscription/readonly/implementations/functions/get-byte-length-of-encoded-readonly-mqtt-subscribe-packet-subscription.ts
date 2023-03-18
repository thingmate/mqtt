import {
  getByteLengthOfEncodedReadonlyMqttPacketTopic,
} from '../../../../../../../components/mqtt-packet-topic/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-topic';
import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IReadonlyMqttSubscribePacketSubscription } from '../../readonly-mqtt-subscribe-packet-subscription.type';

export function getByteLengthOfEncodedReadonlyMqttSubscribePacketSubscription(
  {
    getTopic,
  }: IReadonlyMqttSubscribePacketSubscription,
): number {
  return getByteLengthOfEncodedReadonlyMqttPacketTopic(getTopic()) // topic
    + getByteLengthOfEncodedMqttPacketU8(); // options
}
