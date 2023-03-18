import { IObservable } from '@lirx/core';
import { IReadonlyMqttPacketPayload } from '../../../../packets/components/mqtt-packet-payload/readonly/readonly-mqtt-packet-payload.type';

export interface IMqttClientObserveFunction {
  (
    topic: string,
  ): IObservable<IReadonlyMqttPacketPayload>;
}
