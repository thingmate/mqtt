import {
  readonlyMqttPacketReasonToStandardMqttPacketReason,
} from '../../../../standard/readonly-mqtt-packet-reason-to-standard-mqtt-packet-reason';
import { IMqttPacketPubcompReason } from '../mqtt-packet-pubcomp-reason.type';
import { PUBCOMP_REASON_CODE } from '../pubcomp-reason-code.enum';
import { IStandardMqttPacketPubcompReason } from './standard-mqtt-packet-pubcomp-reason.type';

export function readonlyMqttPacketPubcompReasonToStandardMqttPacketPubcompReason<GCode extends PUBCOMP_REASON_CODE>(
  input: IMqttPacketPubcompReason<GCode>,
): IStandardMqttPacketPubcompReason<GCode> {
  return readonlyMqttPacketReasonToStandardMqttPacketReason(input);
}
