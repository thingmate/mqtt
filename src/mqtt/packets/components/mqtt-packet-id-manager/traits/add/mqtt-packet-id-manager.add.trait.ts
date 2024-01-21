import { IMqttPacketIdManagerAddFunction } from './mqtt-packet-id-manager.add.function-definition';

export interface IMqttPacketIdManagerAddTrait {
  readonly add: IMqttPacketIdManagerAddFunction;
}
