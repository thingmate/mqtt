import {
  readonlyMqttPacketReasonToStandardMqttPacketReason,
} from '../../../../standard/readonly-mqtt-packet-reason-to-standard-mqtt-packet-reason';
import { DISCONNECT_REASON_CODE } from '../disconnect-reason-code.enum';
import { IMqttPacketDisconnectReason } from '../mqtt-packet-disconnect-reason.type';
import { IStandardMqttPacketDisconnectReason } from './standard-mqtt-packet-disconnect-reason.type';

export function readonlyMqttPacketDisconnectReasonToStandardMqttPacketDisconnectReason<GCode extends DISCONNECT_REASON_CODE>(
  input: IMqttPacketDisconnectReason<GCode>,
): IStandardMqttPacketDisconnectReason<GCode> {
  return readonlyMqttPacketReasonToStandardMqttPacketReason(input);
}
