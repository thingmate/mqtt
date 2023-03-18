import {
  readonlyMqttPacketReasonToStandardMqttPacketReason,
} from '../../../../standard/readonly-mqtt-packet-reason-to-standard-mqtt-packet-reason';
import { IMqttPacketPubrelReason } from '../mqtt-packet-pubrel-reason.type';
import { PUBREL_REASON_CODE } from '../pubrel-reason-code.enum';
import { IStandardMqttPacketPubrelReason } from './standard-mqtt-packet-pubrel-reason.type';

export function readonlyMqttPacketPubrelReasonToStandardMqttPacketPubrelReason<GCode extends PUBREL_REASON_CODE>(
  input: IMqttPacketPubrelReason<GCode>,
): IStandardMqttPacketPubrelReason<GCode> {
  return readonlyMqttPacketReasonToStandardMqttPacketReason(input);
}
