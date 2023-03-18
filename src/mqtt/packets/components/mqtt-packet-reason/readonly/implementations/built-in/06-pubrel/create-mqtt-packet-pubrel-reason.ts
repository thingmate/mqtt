import { createReadonlyMqttPacketReason } from '../../create-readonly-mqtt-packet-reason';
import { IMqttPacketPubrelReason } from './mqtt-packet-pubrel-reason.type';
import { pubrelReasonCodeToMessage } from './pubrel-reason-code-to-message';
import { PUBREL_REASON_CODE } from './pubrel-reason-code.enum';

export function createMqttPacketPubrelReason<GCode extends PUBREL_REASON_CODE>(
  code: GCode,
): IMqttPacketPubrelReason<GCode> {
  return createReadonlyMqttPacketReason<GCode>({
    code,
    message: pubrelReasonCodeToMessage(code),
  });
}



