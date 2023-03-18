import {
  readonlyMqttPacketReasonToStandardMqttPacketReason,
} from '../../../../standard/readonly-mqtt-packet-reason-to-standard-mqtt-packet-reason';
import { IMqttPacketPubrecReason } from '../mqtt-packet-pubrec-reason.type';
import { PUBREC_REASON_CODE } from '../pubrec-reason-code.enum';
import { IStandardMqttPacketPubrecReason } from './standard-mqtt-packet-pubrec-reason.type';

export function readonlyMqttPacketPubrecReasonToStandardMqttPacketPubrecReason<GCode extends PUBREC_REASON_CODE>(
  input: IMqttPacketPubrecReason<GCode>,
): IStandardMqttPacketPubrecReason<GCode> {
  return readonlyMqttPacketReasonToStandardMqttPacketReason(input);
}
