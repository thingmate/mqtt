import { IReadonlyMqttPubrecPacket } from '../../../../packets/built-in/05-mqtt-pubrec-packet/readonly/readonly-mqtt-pubrec-packet.type';
import { extractMessageAndReasonCodeFromMqttPacket } from '../_shared/extract-message-and-reason-code-from-mqtt-packet';
import { createPublishError } from './create-publish-error';
import { IPublishError } from './publish-error.type';

export function createPublishErrorFromMqttPubrecPacket(
  packet: IReadonlyMqttPubrecPacket,
): IPublishError {
  return createPublishError(extractMessageAndReasonCodeFromMqttPacket(packet));
}
