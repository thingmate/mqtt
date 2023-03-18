import { IMqttPacketIdValue } from '../../types/mqtt-packet-value.type';
import { IReadonlyMqttPacketId } from '../readonly-mqtt-packet-id.type';

export type IReadonlyMqttPacketIdOrValue =
  | IReadonlyMqttPacketId
  | IMqttPacketIdValue
  ;

export function readonlyMqttPacketIdOrValueToValue(
  input: IReadonlyMqttPacketIdOrValue,
): IMqttPacketIdValue {
  return (typeof input === 'number')
    ? input
    : input.get();
}
