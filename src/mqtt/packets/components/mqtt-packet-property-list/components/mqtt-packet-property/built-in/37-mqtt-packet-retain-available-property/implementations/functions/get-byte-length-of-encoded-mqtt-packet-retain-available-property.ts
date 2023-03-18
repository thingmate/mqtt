import {
  getByteLengthOfEncodedMqttPacketU8,
} from '../../../../../../../../functions/shared/number/u8/get-byte-length-of-encoded-mqtt-packet-u8';
import { IMqttPacketRetainAvailableProperty } from '../../mqtt-packet-retain-available-property.type';
import {
  getByteLengthOfEncodedMqttPacketRetainAvailablePropertyValue,
} from './get-byte-length-of-encoded-mqtt-packet-retain-available-property-value';

export function getByteLengthOfEncodedMqttPacketRetainAvailableProperty(
  input: IMqttPacketRetainAvailableProperty,
): number {
  return getByteLengthOfEncodedMqttPacketU8()
    + getByteLengthOfEncodedMqttPacketRetainAvailablePropertyValue(input.getValue());
}
