import { IMqttPacketIdSetFunction } from './mqtt-packet-id.set.function-definition';

export interface IMqttPacketIdSetTrait {
  readonly set: IMqttPacketIdSetFunction;
}
