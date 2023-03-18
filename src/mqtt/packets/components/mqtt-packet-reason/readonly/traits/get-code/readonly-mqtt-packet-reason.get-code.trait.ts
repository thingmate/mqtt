import { IReadonlyMqttPacketReasonGetCodeFunction } from './readonly-mqtt-packet-reason.get-code.function-definition';

export interface IReadonlyMqttPacketReasonGetCodeTrait<GCode extends number> {
  getCode: IReadonlyMqttPacketReasonGetCodeFunction<GCode>;
}
