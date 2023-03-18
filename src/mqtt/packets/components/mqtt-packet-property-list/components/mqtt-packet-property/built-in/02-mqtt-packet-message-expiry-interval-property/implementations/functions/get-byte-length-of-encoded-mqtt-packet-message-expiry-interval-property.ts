import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketMessageExpiryIntervalProperty } from '../../mqtt-packet-message-expiry-interval-property.type';
import {
  getByteLengthOfEncodedMqttPacketMessageExpiryIntervalPropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-message-expiry-interval-property-value';

export function getByteLengthOfEncodedMqttPacketMessageExpiryIntervalProperty(
  input: IMqttPacketMessageExpiryIntervalProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketMessageExpiryIntervalPropertyValue(input.getValue());
}
