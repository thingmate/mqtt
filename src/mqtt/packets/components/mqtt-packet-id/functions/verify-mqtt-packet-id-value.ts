import { IMqttPacketIdValue } from '../types/mqtt-packet-value.type';
import { isMqttPacketIdValueValid } from './is-mqtt-packet-id-value-valid';

export function verifyMqttPacketIdValue(
  input: IMqttPacketIdValue,
): void {
  if (!isMqttPacketIdValueValid(input)) {
    throw new RangeError(`value must be an integer in the range [1, 0xffff]`);
  }
}


