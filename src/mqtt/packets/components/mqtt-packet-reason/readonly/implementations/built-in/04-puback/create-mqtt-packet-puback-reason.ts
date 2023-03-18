import { createReadonlyMqttPacketReason } from '../../create-readonly-mqtt-packet-reason';
import { IMqttPacketPubackReason } from './mqtt-packet-puback-reason.type';
import { pubackReasonCodeToMessage } from './puback-reason-code-to-message';
import { PUBACK_REASON_CODE } from './puback-reason-code.enum';

export function createMqttPacketPubackReason<GCode extends PUBACK_REASON_CODE>(
  code: GCode,
): IMqttPacketPubackReason<GCode> {
  return createReadonlyMqttPacketReason<GCode>({
    code,
    message: pubackReasonCodeToMessage(code),
  });
}



