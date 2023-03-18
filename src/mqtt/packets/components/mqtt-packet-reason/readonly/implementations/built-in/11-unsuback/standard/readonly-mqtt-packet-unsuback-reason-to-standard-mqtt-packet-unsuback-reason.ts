import {
  readonlyMqttPacketReasonToStandardMqttPacketReason,
} from '../../../../standard/readonly-mqtt-packet-reason-to-standard-mqtt-packet-reason';
import { IMqttPacketUnsubackReason } from '../mqtt-packet-unsuback-reason.type';
import { UNSUBACK_REASON_CODE } from '../unsuback-reason-code.enum';
import { IStandardMqttPacketUnsubackReason } from './standard-mqtt-packet-unsuback-reason.type';

export function readonlyMqttPacketUnsubackReasonToStandardMqttPacketUnsubackReason<GCode extends UNSUBACK_REASON_CODE>(
  input: IMqttPacketUnsubackReason<GCode>,
): IStandardMqttPacketUnsubackReason<GCode> {
  return readonlyMqttPacketReasonToStandardMqttPacketReason(input);
}
