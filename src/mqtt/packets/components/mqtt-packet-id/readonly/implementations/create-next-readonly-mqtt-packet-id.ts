import { generateNextMqttPacketIdValue } from '../../functions/generate-next-mqtt-packet-id-value';
import { IReadonlyMqttPacketId } from '../readonly-mqtt-packet-id.type';
import { createReadonlyMqttPacketId } from './create-readonly-mqtt-packet-id';

export function createNextReadonlyMqttPacketId(
  packetId: IReadonlyMqttPacketId,
): IReadonlyMqttPacketId {
  return createReadonlyMqttPacketId({
    value: generateNextMqttPacketIdValue(packetId.get()),
  });
}
