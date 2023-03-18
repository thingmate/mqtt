import {
  getByteLengthOfEncodedMqttPacketBoolean,
} from '../../../../../../../../functions/shared/boolean/get-byte-length-of-encoded-mqtt-packet-boolean';
import { IMqttPacketRetainAvailablePropertyValue } from '../../mqtt-packet-retain-available-property.type';

export function getByteLengthOfEncodedMqttPacketRetainAvailablePropertyValue(
  input: IMqttPacketRetainAvailablePropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketBoolean();
}
