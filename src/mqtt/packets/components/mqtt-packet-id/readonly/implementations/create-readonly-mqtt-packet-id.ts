import { IMqttPacketIdValue } from '../../types/mqtt-packet-value.type';
import { IReadonlyMqttPacketId } from '../readonly-mqtt-packet-id.type';

export interface IReadonlyMqttPacketIdContext {
  value: IMqttPacketIdValue;
}

export function createReadonlyMqttPacketId(
  context: IReadonlyMqttPacketIdContext,
): IReadonlyMqttPacketId {
  const get = (): IMqttPacketIdValue => {
    return context.value;
  };

  const set = (
    _value: IMqttPacketIdValue,
  ): void => {
    if (
      Number.isSafeInteger(_value)
      && (_value >= 1)
      && (_value <= 0xffff)
    ) {
      context.value = _value;
    } else {
      throw new RangeError(`value must be an integer in the range [1, 0xffff]`);
    }
  };

  const valueOf = get;

  set(context.value);

  return {
    get,
    // set,
    valueOf,
  };
}

