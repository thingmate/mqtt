import { createMqttPacketPubcompReason } from '../create-mqtt-packet-pubcomp-reason';
import { IMqttPacketPubcompReason } from '../mqtt-packet-pubcomp-reason.type';
import { PUBCOMP_REASON_CODE } from '../pubcomp-reason-code.enum';
import { IStandardMqttPacketPubcompReason } from './standard-mqtt-packet-pubcomp-reason.type';

export function standardMqttPacketPubcompReasonToReadonlyMqttPacketPubcompReason<GCode extends PUBCOMP_REASON_CODE>(
  {
    code,
  }: IStandardMqttPacketPubcompReason<GCode>,
): IMqttPacketPubcompReason<GCode> {
  return createMqttPacketPubcompReason(code);
}
