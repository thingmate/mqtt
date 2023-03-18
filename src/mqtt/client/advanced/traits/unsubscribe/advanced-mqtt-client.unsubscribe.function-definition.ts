import { Abortable, AsyncTask } from '@lirx/async-task';
import {
  IReadonlyMqttUnsubscribePacket,
} from '../../../../packets/built-in/10-mqtt-unsubscribe-packet/readonly/readonly-mqtt-unsubscribe-packet.type';
import {
  IReadonlyMqttUnsubackPacket,
} from '../../../../packets/built-in/11-mqtt-unsuback-packet/readonly/readonly-mqtt-unsuback-packet.type';

export interface IAdvancedMqttClientUnsubscribeFunction {
  (
    unsubscribePacket: IReadonlyMqttUnsubscribePacket,
    abortable: Abortable,
  ): AsyncTask<IReadonlyMqttUnsubackPacket>;
}
