import { createNextReadonlyMqttPacketId } from '../../mqtt-packet-id/readonly/implementations/create-next-readonly-mqtt-packet-id';
import { createRandomReadonlyMqttPacketId } from '../../mqtt-packet-id/readonly/implementations/create-random-readonly-mqtt-packet-id';
import { IReadonlyMqttPacketId } from '../../mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';
import {
  IReadonlyMqttPacketIdOrValue,
  readonlyMqttPacketIdOrValueToValue,
} from '../../mqtt-packet-id/readonly/types/readonly-mqtt-packet-id-or-value.type';
import { IMqttPacketIdValue } from '../../mqtt-packet-id/types/mqtt-packet-value.type';
import { IMqttPacketIdManager } from '../mqtt-packet-id-manager.type';

export interface IMqttPacketIdManagerContext {
  currentPacketId: IReadonlyMqttPacketId;
}

export function createMqttPacketIdManager(
  context: IMqttPacketIdManagerContext,
): IMqttPacketIdManager {
  if (context.currentPacketId === void 0) {
    context.currentPacketId = createRandomReadonlyMqttPacketId();
  }

  const ids = new Set<IMqttPacketIdValue>();

  const getCurrent = (): IReadonlyMqttPacketId => {
    return context.currentPacketId;
  };

  const next = (): IReadonlyMqttPacketId => {
    context.currentPacketId = createNextReadonlyMqttPacketId(context.currentPacketId);
    return context.currentPacketId;
  };

  const has = (
    id: IReadonlyMqttPacketIdOrValue,
  ): boolean => {
    return ids.has(readonlyMqttPacketIdOrValueToValue(id));
  };

  const add = (
    id: IReadonlyMqttPacketIdOrValue,
  ): void => {
    ids.add(readonlyMqttPacketIdOrValueToValue(id));
  };

  const remove = (
    id: IReadonlyMqttPacketIdOrValue,
  ): void => {
    ids.delete(readonlyMqttPacketIdOrValueToValue(id));
  };

  return {
    getCurrent,
    next,
    has,
    add,
    remove,
  };
}
