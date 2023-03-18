import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketSubscriptionIdentifiersAvailableProperty } from '../../mqtt-packet-subscription-identifiers-available-property.type';
import {
  getByteLengthOfEncodedMqttPacketSubscriptionIdentifiersAvailablePropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-subscription-identifiers-available-property-value';

export function getByteLengthOfEncodedMqttPacketSubscriptionIdentifiersAvailableProperty(
  input: IMqttPacketSubscriptionIdentifiersAvailableProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketSubscriptionIdentifiersAvailablePropertyValue(input.getValue());
}
