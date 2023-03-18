import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketSharedSubscriptionAvailableProperty } from '../../mqtt-packet-shared-subscription-available-property.type';
import {
  getByteLengthOfEncodedMqttPacketSharedSubscriptionAvailablePropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-shared-subscription-available-property-value';

export function getByteLengthOfEncodedMqttPacketSharedSubscriptionAvailableProperty(
  input: IMqttPacketSharedSubscriptionAvailableProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketSharedSubscriptionAvailablePropertyValue(input.getValue());
}
