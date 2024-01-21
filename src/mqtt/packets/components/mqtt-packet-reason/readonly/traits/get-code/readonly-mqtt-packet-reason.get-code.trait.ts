import { IReadonlyMqttPacketReasonGetCodeFunction } from './readonly-mqtt-packet-reason.get-code.function-definition';

export interface IReadonlyMqttPacketReasonGetCodeTrait<GCode extends number> {
  readonly getCode: IReadonlyMqttPacketReasonGetCodeFunction<GCode>;
}
