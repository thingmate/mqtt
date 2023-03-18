import {
  readonlyMqttPacketReasonToStandardMqttPacketReason,
} from '../../../../standard/readonly-mqtt-packet-reason-to-standard-mqtt-packet-reason';
import { AUTH_REASON_CODE } from '../auth-reason-code.enum';
import { IMqttPacketAuthReason } from '../mqtt-packet-auth-reason.type';
import { IStandardMqttPacketAuthReason } from './standard-mqtt-packet-auth-reason.type';

export function readonlyMqttPacketAuthReasonToStandardMqttPacketAuthReason<GCode extends AUTH_REASON_CODE>(
  input: IMqttPacketAuthReason<GCode>,
): IStandardMqttPacketAuthReason<GCode> {
  return readonlyMqttPacketReasonToStandardMqttPacketReason(input);
}
