import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketWildcardSubscriptionAvailableProperty } from '../../mqtt-packet-wildcard-subscription-available-property.type';
import {
  getByteLengthOfEncodedMqttPacketWildcardSubscriptionAvailablePropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-wildcard-subscription-available-property-value';

export function getByteLengthOfEncodedMqttPacketWildcardSubscriptionAvailableProperty(
  input: IMqttPacketWildcardSubscriptionAvailableProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketWildcardSubscriptionAvailablePropertyValue(input.getValue());
}
