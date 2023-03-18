import { verifyMqttPacketIdValue } from '../functions/verify-mqtt-packet-id-value';
import { IMqttPacketId } from '../mqtt-packet-id.type';
import { createReadonlyMqttPacketId, IReadonlyMqttPacketIdContext } from '../readonly/implementations/create-readonly-mqtt-packet-id';
import { IReadonlyMqttPacketId } from '../readonly/readonly-mqtt-packet-id.type';
import { IMqttPacketIdValue } from '../types/mqtt-packet-value.type';

export interface IMqttPacketIdContext extends IReadonlyMqttPacketIdContext {
  value: IMqttPacketIdValue;
}

export function createMqttPacketId(
  context: IMqttPacketIdContext,
): IMqttPacketId {
  const readonlyMqttPacketId: IReadonlyMqttPacketId = createReadonlyMqttPacketId(context);

  const set = (
    value: IMqttPacketIdValue,
  ): void => {
    verifyMqttPacketIdValue(value);
    context.value = value;
  };

  return {
    ...readonlyMqttPacketId,
    set,
  };
}

