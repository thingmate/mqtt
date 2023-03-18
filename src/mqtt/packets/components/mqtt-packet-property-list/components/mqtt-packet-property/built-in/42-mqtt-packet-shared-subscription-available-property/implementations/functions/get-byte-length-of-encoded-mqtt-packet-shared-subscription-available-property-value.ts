import {
  getByteLengthOfEncodedMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/get-byte-length-of-encoded-mqtt-packet-boolean';
import { IMqttPacketSharedSubscriptionAvailablePropertyValue } from '../../mqtt-packet-shared-subscription-available-property.type';

export function getByteLengthOfEncodedMqttPacketSharedSubscriptionAvailablePropertyValue(
  input: IMqttPacketSharedSubscriptionAvailablePropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketBoolean();
}
