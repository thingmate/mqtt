import { filterPushPipeWithBackPressure, IPushSourceWithBackPressure } from '@lirx/stream';
import { isMqttPublishPacket } from '../../../../../packets/built-in/03-mqtt-publish-packet/constants/is-mqtt-publish-packet';
import {
  IReadonlyMqttPublishPacket,
} from '../../../../../packets/built-in/03-mqtt-publish-packet/readonly/readonly-mqtt-publish-packet.type';
import { IReadonlyMqttPacketTopic } from '../../../../../packets/components/mqtt-packet-topic/readonly/readonly-mqtt-packet-topic.type';

import { IGenericMqttPacket } from '../../../../../packets/components/mqtt-packet/mqtt-packet.type';
import { IAdvancedMqttClientOnFunction } from '../../../traits/on/advanced-mqtt-client.on.function-definition';

export interface ICreateAdvancedMqttClientOnFunctionFromMqttPacketStreamOptions {
  input$: IPushSourceWithBackPressure<IGenericMqttPacket>;
}

export function createAdvancedMqttClientOnFunction(
  {
    input$,
  }: ICreateAdvancedMqttClientOnFunctionFromMqttPacketStreamOptions,
): IAdvancedMqttClientOnFunction {
  return (
    topic: IReadonlyMqttPacketTopic,
  ): IPushSourceWithBackPressure<IReadonlyMqttPublishPacket> => {
    return filterPushPipeWithBackPressure<IGenericMqttPacket>(input$, (
      packet: IGenericMqttPacket,
    ): boolean => {
      return isMqttPublishPacket(packet)
        && topic.matches(packet.getTopic());
    }) as IPushSourceWithBackPressure<IReadonlyMqttPublishPacket>;
  };
}
