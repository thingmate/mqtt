import { createMqttPacketSubackReason } from '../create-mqtt-packet-suback-reason';
import { IMqttPacketSubackReason } from '../mqtt-packet-suback-reason.type';
import { SUBACK_REASON_CODE } from '../suback-reason-code.enum';
import { IStandardMqttPacketSubackReason } from './standard-mqtt-packet-suback-reason.type';

export function standardMqttPacketSubackReasonToReadonlyMqttPacketSubackReason<GCode extends SUBACK_REASON_CODE>(
  {
    code,
  }: IStandardMqttPacketSubackReason<GCode>,
): IMqttPacketSubackReason<GCode> {
  return createMqttPacketSubackReason(code);
}
