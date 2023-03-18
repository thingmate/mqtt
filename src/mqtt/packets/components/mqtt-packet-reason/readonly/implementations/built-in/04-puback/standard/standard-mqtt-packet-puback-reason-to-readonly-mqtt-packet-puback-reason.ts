import { createMqttPacketPubackReason } from '../create-mqtt-packet-puback-reason';
import { IMqttPacketPubackReason } from '../mqtt-packet-puback-reason.type';
import { PUBACK_REASON_CODE } from '../puback-reason-code.enum';
import { IStandardMqttPacketPubackReason } from './standard-mqtt-packet-puback-reason.type';

export function standardMqttPacketPubackReasonToReadonlyMqttPacketPubackReason<GCode extends PUBACK_REASON_CODE>(
  {
    code,
  }: IStandardMqttPacketPubackReason<GCode>,
): IMqttPacketPubackReason<GCode> {
  return createMqttPacketPubackReason(code);
}
