import { IReadonlyMqttPacketId } from '../../../../../components/mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';

export interface IReadonlyMqttSubackPacketGetPacketIdFunction {
  (): IReadonlyMqttPacketId;
}
