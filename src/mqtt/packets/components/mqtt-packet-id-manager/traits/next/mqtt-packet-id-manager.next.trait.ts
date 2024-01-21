import { IMqttPacketIdManagerNextFunction } from './mqtt-packet-id-manager.next.function-definition';

export interface IMqttPacketIdManagerNextTrait {
  readonly next: IMqttPacketIdManagerNextFunction;
}
