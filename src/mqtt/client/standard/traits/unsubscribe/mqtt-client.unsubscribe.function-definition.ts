import { Abortable, AsyncTask } from '@lirx/async-task';
import {
  IStandardMqttUnsubscribePacket,
} from '../../../../packets/built-in/10-mqtt-unsubscribe-packet/readonly/standard/standard-mqtt-unsubscribe-packet.type';
import {
  IStandardMqttUnsubackPacket,
} from '../../../../packets/built-in/11-mqtt-unsuback-packet/readonly/standard/standard-mqtt-unsuback-packet.type';

export interface IMqttClientUnsubscribeFunctionOptions extends //
  Partial<Pick<IStandardMqttUnsubscribePacket, 'packetId' | 'properties'>>
//
{
  topic: string;
  abortable: Abortable;
}

export interface IMqttClientUnsubscribeFunction {
  (
    options: IMqttClientUnsubscribeFunctionOptions,
  ): AsyncTask<IStandardMqttUnsubackPacket>;
}
