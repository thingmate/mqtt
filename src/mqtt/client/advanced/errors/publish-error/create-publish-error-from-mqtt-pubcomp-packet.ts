import { IReadonlyMqttPubcompPacket } from '../../../../packets/built-in/07-mqtt-pubcomp-packet/readonly/readonly-mqtt-pubcomp-packet.type';
import { extractMessageAndReasonCodeFromMqttPacket } from '../_shared/extract-message-and-reason-code-from-mqtt-packet';
import { createPublishError } from './create-publish-error';
import { IPublishError } from './publish-error.type';

export function createPublishErrorFromMqttPubcompPacket(
  packet: IReadonlyMqttPubcompPacket,
): IPublishError {
  return createPublishError(extractMessageAndReasonCodeFromMqttPacket(packet));
}
