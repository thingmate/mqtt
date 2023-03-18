import { createReadonlyMqttPacketReason } from '../../create-readonly-mqtt-packet-reason';
import { IMqttPacketPubrecReason } from './mqtt-packet-pubrec-reason.type';
import { pubrecReasonCodeToMessage } from './pubrec-reason-code-to-message';
import { PUBREC_REASON_CODE } from './pubrec-reason-code.enum';

export function createMqttPacketPubrecReason<GCode extends PUBREC_REASON_CODE>(
  code: GCode,
): IMqttPacketPubrecReason<GCode> {
  return createReadonlyMqttPacketReason<GCode>({
    code,
    message: pubrecReasonCodeToMessage(code),
  });
}



