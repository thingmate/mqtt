import { IVariableByteInteger } from '../../../../../../../functions/shared/number/variable-byte-integer/variable-byte-integer.type';
import { IReadonlyMqttSubscribePacketSubscription } from '../../readonly-mqtt-subscribe-packet-subscription.type';
import {
  getByteLengthOfEncodedReadonlyMqttSubscribePacketSubscription,
} from './get-byte-length-of-encoded-readonly-mqtt-subscribe-packet-subscription';

export function getByteLengthOfEncodedReadonlyMqttSubscribePacketSubscriptionList(
  subscriptions: readonly IReadonlyMqttSubscribePacketSubscription[],
): number {
  let length: IVariableByteInteger = 0;

  for (let i = 0, l = subscriptions.length; i < l; i++) {
    length += getByteLengthOfEncodedReadonlyMqttSubscribePacketSubscription(subscriptions[i]);
  }

  return length;
}
