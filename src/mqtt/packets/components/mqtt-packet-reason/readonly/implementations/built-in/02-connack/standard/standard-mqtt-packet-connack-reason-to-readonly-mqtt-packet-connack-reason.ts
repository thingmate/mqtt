import { CONNACK_REASON_CODE } from '../connack-reason-code.enum';
import { createMqttPacketConnackReason } from '../create-mqtt-packet-connack-reason';
import { IMqttPacketConnackReason } from '../mqtt-packet-connack-reason.type';
import { IStandardMqttPacketConnackReason } from './standard-mqtt-packet-connack-reason.type';

export function standardMqttPacketConnackReasonToReadonlyMqttPacketConnackReason<GCode extends CONNACK_REASON_CODE>(
  {
    code,
  }: IStandardMqttPacketConnackReason<GCode>,
): IMqttPacketConnackReason<GCode> {
  return createMqttPacketConnackReason(code);
}
