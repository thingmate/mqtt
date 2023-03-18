import { IPushSourceWithBackPressure, mapPushPipeWithBackPressure } from '@lirx/stream';
import {
  readonlyMqttPublishPacketToStandardMqttPublishPacket,
} from '../../../../../../packets/built-in/03-mqtt-publish-packet/readonly/standard/readonly-mqtt-publish-packet-to-standard-mqtt-publish-packet';
import {
  IStandardMqttPublishPacket,
} from '../../../../../../packets/built-in/03-mqtt-publish-packet/readonly/standard/standard-mqtt-publish-packet.type';
import {
  createReadonlyMqttPacketTopicFromString,
} from '../../../../../../packets/components/mqtt-packet-topic/readonly/implementations/create-readonly-mqtt-packet-topic-from-string';

import { IAdvancedMqttClient } from '../../../../../advanced/advanced-mqtt-client.type';
import { IMqttClientOnFunction } from '../../../../traits/on/mqtt-client.on.function-definition';

export function createMqttClientOnFunctionFromAdvancedMqttClient(
  advancedMqttClient: IAdvancedMqttClient,
): IMqttClientOnFunction {
  return (
    topic: string,
  ): IPushSourceWithBackPressure<IStandardMqttPublishPacket> => {
    return mapPushPipeWithBackPressure(
      advancedMqttClient.on(createReadonlyMqttPacketTopicFromString(topic)),
      readonlyMqttPublishPacketToStandardMqttPublishPacket,
    );
  };
}
