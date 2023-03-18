import { IReadonlyMqttPacketReason } from '../readonly-mqtt-packet-reason.type';
import { IStandardMqttPacketReason } from './standard-mqtt-packet-reason.type';

export function readonlyMqttPacketReasonToStandardMqttPacketReason<GCode extends number>(
  {
    getCode,
    getMessage,
  }: IReadonlyMqttPacketReason<GCode>,
): IStandardMqttPacketReason<GCode> {
  return {
    code: getCode(),
    message: getMessage(),
  };
}
