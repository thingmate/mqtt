import { IPushSourceWithBackPressure } from '@lirx/stream';
import { IReadonlyMqttPublishPacket } from '../../../../packets/built-in/03-mqtt-publish-packet/readonly/readonly-mqtt-publish-packet.type';
import { IReadonlyMqttPacketTopic } from '../../../../packets/components/mqtt-packet-topic/readonly/readonly-mqtt-packet-topic.type';

export interface IAdvancedMqttClientOnFunction {
  (
    topic: IReadonlyMqttPacketTopic,
  ): IPushSourceWithBackPressure<IReadonlyMqttPublishPacket>;
}
