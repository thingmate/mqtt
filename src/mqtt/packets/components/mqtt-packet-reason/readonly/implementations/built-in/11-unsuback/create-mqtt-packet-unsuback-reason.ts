import { createReadonlyMqttPacketReason } from '../../create-readonly-mqtt-packet-reason';
import { IMqttPacketUnsubackReason } from './mqtt-packet-unsuback-reason.type';
import { unsubackReasonCodeToMessage } from './unsuback-reason-code-to-message';
import { UNSUBACK_REASON_CODE } from './unsuback-reason-code.enum';

export function createMqttPacketUnsubackReason<GCode extends UNSUBACK_REASON_CODE>(
  code: GCode,
): IMqttPacketUnsubackReason<GCode> {
  return createReadonlyMqttPacketReason<GCode>({
    code,
    message: unsubackReasonCodeToMessage(code),
  });
}



