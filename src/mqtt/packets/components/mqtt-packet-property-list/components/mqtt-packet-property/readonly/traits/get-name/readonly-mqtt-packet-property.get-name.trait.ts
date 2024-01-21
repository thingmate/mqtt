import { IReadonlyMqttPacketPropertyGetNameFunction } from './readonly-mqtt-packet-property.get-name.function-definition';

export interface IReadonlyMqttPacketPropertyGetNameTrait<GName extends string> {
  readonly getName: IReadonlyMqttPacketPropertyGetNameFunction<GName>;
}
