import { verifyMqttPacketIdValue } from '../../functions/verify-mqtt-packet-id-value';
import { IMqttPacketIdValue } from '../../types/mqtt-packet-value.type';
import { IReadonlyMqttPacketId } from '../readonly-mqtt-packet-id.type';
import { createReadonlyMqttPacketId } from './create-readonly-mqtt-packet-id';

export function createReadonlyMqttPacketIdFromNumber(
  value: IMqttPacketIdValue,
): IReadonlyMqttPacketId {
  verifyMqttPacketIdValue(value);
  return createReadonlyMqttPacketId({
    value,
  });
}

