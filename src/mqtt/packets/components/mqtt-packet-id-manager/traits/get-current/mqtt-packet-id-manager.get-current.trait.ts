import { IMqttPacketIdManagerGetCurrentFunction } from './mqtt-packet-id-manager.get-current.function-definition';

export interface IMqttPacketIdManagerGetCurrentTrait {
  readonly getCurrent: IMqttPacketIdManagerGetCurrentFunction;
}
