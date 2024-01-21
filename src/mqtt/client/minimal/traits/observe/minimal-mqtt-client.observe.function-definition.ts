import { IPushSourceWithBackPressure } from '@lirx/stream';
import { IReadonlyMqttPacketPayload } from '../../../../packets/components/mqtt-packet-payload/readonly/readonly-mqtt-packet-payload.type';

export interface IMinimalMqttClientObserveFunction {
  (
    topic: string,
  ): IPushSourceWithBackPressure<IReadonlyMqttPacketPayload>;
}
