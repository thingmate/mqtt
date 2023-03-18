import { Abortable, AsyncTask } from '@lirx/async-task';
import {
  IReadonlyMqttSubscribePacket,
} from '../../../../packets/built-in/08-mqtt-subscribe-packet/readonly/readonly-mqtt-subscribe-packet.type';
import { IReadonlyMqttSubackPacket } from '../../../../packets/built-in/09-mqtt-suback-packet/readonly/readonly-mqtt-suback-packet.type';

export interface IAdvancedMqttClientSubscribeFunction {
  (
    subscribePacket: IReadonlyMqttSubscribePacket,
    abortable: Abortable,
  ): AsyncTask<IReadonlyMqttSubackPacket>;
}
