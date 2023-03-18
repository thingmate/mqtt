import { createRandomReadonlyMqttPacketId } from '../../mqtt-packet-id/readonly/implementations/create-random-readonly-mqtt-packet-id';
import { IMqttPacketIdManager } from '../mqtt-packet-id-manager.type';
import { createMqttPacketIdManager } from './create-mqtt-packet-id-manager';

export function createMqttPacketIdManagerInitializedAtRandom(): IMqttPacketIdManager {
  return createMqttPacketIdManager({
    currentPacketId: createRandomReadonlyMqttPacketId(),
  });
}
