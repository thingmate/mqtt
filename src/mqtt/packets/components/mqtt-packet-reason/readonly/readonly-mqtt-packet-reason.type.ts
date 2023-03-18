import { IToStringTrait } from '@lifaon/traits';
import { IReadonlyMqttPacketReasonGetCodeTrait } from './traits/get-code/readonly-mqtt-packet-reason.get-code.trait';
import { IReadonlyMqttPacketReasonGetMessageTrait } from './traits/get-message/readonly-mqtt-packet-reason.get-message.trait';

export interface IReadonlyMqttPacketReason<GCode extends number> extends //
  IReadonlyMqttPacketReasonGetCodeTrait<GCode>,
  IReadonlyMqttPacketReasonGetMessageTrait,
  IToStringTrait
//
{

}

export type IGenericReadonlyMqttPacketReason = IReadonlyMqttPacketReason<number>;
