import { createReadonlyMqttPacketReason } from '../../create-readonly-mqtt-packet-reason';
import { IMqttPacketPubcompReason } from './mqtt-packet-pubcomp-reason.type';
import { pubcompReasonCodeToMessage } from './pubcomp-reason-code-to-message';
import { PUBCOMP_REASON_CODE } from './pubcomp-reason-code.enum';

export function createMqttPacketPubcompReason<GCode extends PUBCOMP_REASON_CODE>(
  code: GCode,
): IMqttPacketPubcompReason<GCode> {
  return createReadonlyMqttPacketReason<GCode>({
    code,
    message: pubcompReasonCodeToMessage(code),
  });
}



