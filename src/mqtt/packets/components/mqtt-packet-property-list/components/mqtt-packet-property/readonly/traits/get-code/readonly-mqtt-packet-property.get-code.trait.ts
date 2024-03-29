import { IReadonlyMqttPacketPropertyGetCodeFunction } from './readonly-mqtt-packet-property.get-code.function-definition';

export interface IReadonlyMqttPacketPropertyGetCodeTrait<GCode extends number> {
  readonly getCode: IReadonlyMqttPacketPropertyGetCodeFunction<GCode>;
}
