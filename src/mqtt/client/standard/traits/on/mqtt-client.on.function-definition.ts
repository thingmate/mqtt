import { IPushSourceWithBackPressure } from '@lirx/stream';
import {
  IStandardMqttPublishPacket,
} from '../../../../packets/built-in/03-mqtt-publish-packet/readonly/standard/standard-mqtt-publish-packet.type';

export interface IMqttClientOnFunction {
  (
    topic: string,
  ): IPushSourceWithBackPressure<IStandardMqttPublishPacket>;
}
