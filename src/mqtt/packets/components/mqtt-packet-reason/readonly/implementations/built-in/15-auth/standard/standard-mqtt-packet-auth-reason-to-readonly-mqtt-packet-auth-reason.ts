import { AUTH_REASON_CODE } from '../auth-reason-code.enum';
import { createMqttPacketAuthReason } from '../create-mqtt-packet-auth-reason';
import { IMqttPacketAuthReason } from '../mqtt-packet-auth-reason.type';
import { IStandardMqttPacketAuthReason } from './standard-mqtt-packet-auth-reason.type';

export function standardMqttPacketAuthReasonToReadonlyMqttPacketAuthReason<GCode extends AUTH_REASON_CODE>(
  {
    code,
  }: IStandardMqttPacketAuthReason<GCode>,
): IMqttPacketAuthReason<GCode> {
  return createMqttPacketAuthReason(code);
}
