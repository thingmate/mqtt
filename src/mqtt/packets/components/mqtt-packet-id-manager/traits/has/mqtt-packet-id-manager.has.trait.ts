import { IMqttPacketIdManagerHasFunction } from './mqtt-packet-id-manager.has.function-definition';

export interface IMqttPacketIdManagerHasTrait {
  readonly has: IMqttPacketIdManagerHasFunction;
}
