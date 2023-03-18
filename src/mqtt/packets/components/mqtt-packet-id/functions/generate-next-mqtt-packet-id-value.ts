import { IMqttPacketIdValue } from '../types/mqtt-packet-value.type';

export function generateNextMqttPacketIdValue(
  packetId: IMqttPacketIdValue,
): IMqttPacketIdValue {
  return 1 + (packetId % 0xffff);
}
