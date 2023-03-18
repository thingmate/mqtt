import {
  getByteLengthOfEncodedMqttPacketVariableByteInteger,
} from '../../../../../../../../functions/shared/number/variable-byte-integer/get-byte-length-of-encoded-mqtt-packet-variable-byte-integer';
import { IMqttPacketSubscriptionIdentifierPropertyValue } from '../../mqtt-packet-subscription-identifier-property.type';

export function getByteLengthOfEncodedMqttPacketSubscriptionIdentifierPropertyValue(
  input: IMqttPacketSubscriptionIdentifierPropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketVariableByteInteger(input);
}
