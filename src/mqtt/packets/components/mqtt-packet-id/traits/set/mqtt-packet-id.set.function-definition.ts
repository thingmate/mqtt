import { IMqttPacketIdValue } from '../../types/mqtt-packet-value.type';

export interface IMqttPacketIdSetFunction {
  (
    value: IMqttPacketIdValue,
  ): void;
}
