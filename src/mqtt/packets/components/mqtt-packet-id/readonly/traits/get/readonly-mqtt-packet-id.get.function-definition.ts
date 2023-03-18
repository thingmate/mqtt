import { IMqttPacketIdValue } from '../../../types/mqtt-packet-value.type';

export interface IReadonlyMqttPacketIdGetFunction {
  (): IMqttPacketIdValue;
}
