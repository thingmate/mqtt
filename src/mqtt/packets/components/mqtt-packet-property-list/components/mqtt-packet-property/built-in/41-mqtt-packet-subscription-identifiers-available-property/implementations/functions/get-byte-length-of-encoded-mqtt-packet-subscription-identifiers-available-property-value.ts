import {
  getByteLengthOfEncodedMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/get-byte-length-of-encoded-mqtt-packet-boolean';
import {
  IMqttPacketSubscriptionIdentifiersAvailablePropertyValue,
} from '../../mqtt-packet-subscription-identifiers-available-property.type';

export function getByteLengthOfEncodedMqttPacketSubscriptionIdentifiersAvailablePropertyValue(
  input: IMqttPacketSubscriptionIdentifiersAvailablePropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketBoolean();
}
