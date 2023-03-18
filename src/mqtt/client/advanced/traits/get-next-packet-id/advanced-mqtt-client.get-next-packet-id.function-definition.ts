import { IReadonlyMqttPacketId } from '../../../../packets/components/mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';

export interface IAdvancedMqttClientGetNextPacketIdFunction {
  (): IReadonlyMqttPacketId;
}
