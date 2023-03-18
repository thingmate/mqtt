import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketSubscriptionIdentifierProperty } from '../../mqtt-packet-subscription-identifier-property.type';
import {
  getByteLengthOfEncodedMqttPacketSubscriptionIdentifierPropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-subscription-identifier-property-value';

export function getByteLengthOfEncodedMqttPacketSubscriptionIdentifierProperty(
  input: IMqttPacketSubscriptionIdentifierProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketSubscriptionIdentifierPropertyValue(input.getValue());
}
