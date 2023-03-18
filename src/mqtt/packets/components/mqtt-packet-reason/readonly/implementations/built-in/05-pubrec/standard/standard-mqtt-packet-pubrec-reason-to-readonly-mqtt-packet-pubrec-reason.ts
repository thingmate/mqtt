import { createMqttPacketPubrecReason } from '../create-mqtt-packet-pubrec-reason';
import { IMqttPacketPubrecReason } from '../mqtt-packet-pubrec-reason.type';
import { PUBREC_REASON_CODE } from '../pubrec-reason-code.enum';
import { IStandardMqttPacketPubrecReason } from './standard-mqtt-packet-pubrec-reason.type';

export function standardMqttPacketPubrecReasonToReadonlyMqttPacketPubrecReason<GCode extends PUBREC_REASON_CODE>(
  {
    code,
  }: IStandardMqttPacketPubrecReason<GCode>,
): IMqttPacketPubrecReason<GCode> {
  return createMqttPacketPubrecReason(code);
}
