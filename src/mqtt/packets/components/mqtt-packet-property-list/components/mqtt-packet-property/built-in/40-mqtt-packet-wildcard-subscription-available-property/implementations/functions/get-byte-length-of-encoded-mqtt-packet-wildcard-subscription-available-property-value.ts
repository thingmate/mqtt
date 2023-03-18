import {
  getByteLengthOfEncodedMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/get-byte-length-of-encoded-mqtt-packet-boolean';
import { IMqttPacketWildcardSubscriptionAvailablePropertyValue } from '../../mqtt-packet-wildcard-subscription-available-property.type';

export function getByteLengthOfEncodedMqttPacketWildcardSubscriptionAvailablePropertyValue(
  input: IMqttPacketWildcardSubscriptionAvailablePropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketBoolean();
}
