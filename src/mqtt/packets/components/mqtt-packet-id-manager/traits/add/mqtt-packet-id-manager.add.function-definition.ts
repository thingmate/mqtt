import { IReadonlyMqttPacketIdOrValue } from '../../../mqtt-packet-id/readonly/types/readonly-mqtt-packet-id-or-value.type';

export interface IMqttPacketIdManagerAddFunction {
  (
    id: IReadonlyMqttPacketIdOrValue,
  ): void;
}
