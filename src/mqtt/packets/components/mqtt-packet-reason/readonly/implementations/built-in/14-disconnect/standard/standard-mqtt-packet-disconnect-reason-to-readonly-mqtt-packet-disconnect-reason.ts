import { createMqttPacketDisconnectReason } from '../create-mqtt-packet-disconnect-reason';
import { DISCONNECT_REASON_CODE } from '../disconnect-reason-code.enum';
import { IMqttPacketDisconnectReason } from '../mqtt-packet-disconnect-reason.type';
import { IStandardMqttPacketDisconnectReason } from './standard-mqtt-packet-disconnect-reason.type';

export function standardMqttPacketDisconnectReasonToReadonlyMqttPacketDisconnectReason<GCode extends DISCONNECT_REASON_CODE>(
  {
    code,
  }: IStandardMqttPacketDisconnectReason<GCode>,
): IMqttPacketDisconnectReason<GCode> {
  return createMqttPacketDisconnectReason(code);
}
