import { IReadonlyMqttPacketId } from '../../../mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';

export interface IMqttPacketIdManagerRemoveFunction {
  (
    id: IReadonlyMqttPacketId,
  ): void;
}
