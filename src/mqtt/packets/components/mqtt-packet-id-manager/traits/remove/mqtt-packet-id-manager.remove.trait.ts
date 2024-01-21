import { IMqttPacketIdManagerRemoveFunction } from './mqtt-packet-id-manager.remove.function-definition';

export interface IMqttPacketIdManagerRemoveTrait {
  readonly remove: IMqttPacketIdManagerRemoveFunction;
}
