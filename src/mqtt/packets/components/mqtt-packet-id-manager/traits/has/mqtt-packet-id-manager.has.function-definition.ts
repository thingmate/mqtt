import { IReadonlyMqttPacketIdOrValue } from '../../../mqtt-packet-id/readonly/types/readonly-mqtt-packet-id-or-value.type';

export interface IMqttPacketIdManagerHasFunction {
  (
    id: IReadonlyMqttPacketIdOrValue,
  ): boolean;
}
