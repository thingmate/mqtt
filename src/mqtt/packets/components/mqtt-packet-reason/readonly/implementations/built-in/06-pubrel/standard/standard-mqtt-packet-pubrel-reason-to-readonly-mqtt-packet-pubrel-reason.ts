import { createMqttPacketPubrelReason } from '../create-mqtt-packet-pubrel-reason';
import { IMqttPacketPubrelReason } from '../mqtt-packet-pubrel-reason.type';
import { PUBREL_REASON_CODE } from '../pubrel-reason-code.enum';
import { IStandardMqttPacketPubrelReason } from './standard-mqtt-packet-pubrel-reason.type';

export function standardMqttPacketPubrelReasonToReadonlyMqttPacketPubrelReason<GCode extends PUBREL_REASON_CODE>(
  {
    code,
  }: IStandardMqttPacketPubrelReason<GCode>,
): IMqttPacketPubrelReason<GCode> {
  return createMqttPacketPubrelReason(code);
}
