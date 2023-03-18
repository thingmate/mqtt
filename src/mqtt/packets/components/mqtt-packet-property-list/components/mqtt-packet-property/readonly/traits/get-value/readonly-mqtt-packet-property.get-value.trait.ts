import { IReadonlyMqttPacketPropertyGetValueFunction } from './readonly-mqtt-packet-property.get-value.function-definition';

export interface IReadonlyMqttPacketPropertyGetValueTrait<GValue> {
  getValue: IReadonlyMqttPacketPropertyGetValueFunction<GValue>;
}
