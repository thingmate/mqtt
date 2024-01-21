import { IMqttPacketIdValue } from '../../types/mqtt-packet-value.type';
import { IReadonlyMqttPacketId } from '../readonly-mqtt-packet-id.type';

export interface IReadonlyMqttPacketIdContext {
  readonly value: IMqttPacketIdValue;
}

export function createReadonlyMqttPacketId(
  context: IReadonlyMqttPacketIdContext,
): IReadonlyMqttPacketId {
  if (
    !(
      Number.isSafeInteger(context.value)
      && (context.value >= 1)
      && (context.value <= 0xffff)
    )
  ) {
    throw new RangeError(`value must be an integer in the range [1, 0xffff]`);
  }

  const get = (): IMqttPacketIdValue => {
    return context.value;
  };

  const valueOf = get;

  return {
    get,
    valueOf,
  };
}

