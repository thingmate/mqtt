import {
  getByteLengthOfEncodedMqttPacketUint8ArrayWithLength,
} from '../../../../../../../../functions/shared/uint8-array/with-length/get-byte-length-of-encoded-mqtt-packet-uint8-array-with-length';
import { IMqttPacketCorrelationDataPropertyValue } from '../../mqtt-packet-correlation-data-property.type';

export function getByteLengthOfEncodedMqttPacketCorrelationDataPropertyValue(
  input: IMqttPacketCorrelationDataPropertyValue,
): number {
  return getByteLengthOfEncodedMqttPacketUint8ArrayWithLength(input);
}
