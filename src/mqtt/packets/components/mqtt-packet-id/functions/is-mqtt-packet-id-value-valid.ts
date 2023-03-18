import { IMqttPacketIdValue } from '../types/mqtt-packet-value.type';

export function isMqttPacketIdValueValid(
  input: IMqttPacketIdValue,
): boolean {
  return Number.isSafeInteger(input)
    && (input >= 1)
    && (input <= 0xffff);
}
