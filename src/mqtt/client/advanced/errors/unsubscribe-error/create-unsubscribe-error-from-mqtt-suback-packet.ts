import {
  IReadonlyMqttUnsubackPacket,
} from '../../../../packets/built-in/11-mqtt-unsuback-packet/readonly/readonly-mqtt-unsuback-packet.type';
import { extractMessageAndReasonCodeFromMqttPacket } from '../_shared/extract-message-and-reason-code-from-mqtt-packet';
import { createUnsubscribeError } from './create-unsubscribe-error';
import { IUnsubscribeError } from './unsubscribe-error.type';

export function createUnsubscribeErrorFromMqttUnsubackPacket(
  packet: IReadonlyMqttUnsubackPacket,
): IUnsubscribeError {
  return createUnsubscribeError(extractMessageAndReasonCodeFromMqttPacket(packet));
}
