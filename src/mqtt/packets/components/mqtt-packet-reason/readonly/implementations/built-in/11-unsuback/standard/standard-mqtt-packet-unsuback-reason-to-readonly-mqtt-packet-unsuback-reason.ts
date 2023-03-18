import { createMqttPacketUnsubackReason } from '../create-mqtt-packet-unsuback-reason';
import { IMqttPacketUnsubackReason } from '../mqtt-packet-unsuback-reason.type';
import { UNSUBACK_REASON_CODE } from '../unsuback-reason-code.enum';
import { IStandardMqttPacketUnsubackReason } from './standard-mqtt-packet-unsuback-reason.type';

export function standardMqttPacketUnsubackReasonToReadonlyMqttPacketUnsubackReason<GCode extends UNSUBACK_REASON_CODE>(
  {
    code,
  }: IStandardMqttPacketUnsubackReason<GCode>,
): IMqttPacketUnsubackReason<GCode> {
  return createMqttPacketUnsubackReason(code);
}
