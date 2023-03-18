import { IMqttPacketIdValue } from '../types/mqtt-packet-value.type';

export function generateRandomMqttPacketIdValue(): IMqttPacketIdValue {
  return Math.max(1, Math.floor(Math.random() * 0xffff));
}
