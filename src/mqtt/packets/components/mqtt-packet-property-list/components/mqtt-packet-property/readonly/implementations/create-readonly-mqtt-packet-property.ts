import { IReadonlyMqttPacketProperty } from '../readonly-mqtt-packet-property.type';

export interface IReadonlyMqttPacketPropertyContext<GCode extends number, GName extends string, GValue> {
  readonly code: GCode;
  readonly name: GName;
  readonly value: GValue;
}

export function createReadonlyMqttPacketProperty<GCode extends number, GName extends string, GValue>(
  context: IReadonlyMqttPacketPropertyContext<GCode, GName, GValue>,
): IReadonlyMqttPacketProperty<GCode, GName, GValue> {
  const getCode = (): GCode => {
    return context.code;
  };

  const getName = (): GName => {
    return context.name;
  };

  const getValue = (): GValue => {
    return context.value;
  };

  return {
    getCode,
    getName,
    getValue,
  };
}

