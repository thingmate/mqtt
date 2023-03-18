import { generateRandomMqttPacketIdValue } from '../../functions/generate-random-mqtt-packet-id-value';
import { IReadonlyMqttPacketId } from '../readonly-mqtt-packet-id.type';
import { createReadonlyMqttPacketId } from './create-readonly-mqtt-packet-id';

export function createRandomReadonlyMqttPacketId(): IReadonlyMqttPacketId {
  return createReadonlyMqttPacketId({
    value: generateRandomMqttPacketIdValue(),
  });
}

