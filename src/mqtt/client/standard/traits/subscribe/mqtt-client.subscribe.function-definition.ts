import { Abortable, AsyncTask } from '@lirx/async-task';
import {
  IStandardMqttSubscribePacketSubscription,
} from '../../../../packets/built-in/08-mqtt-subscribe-packet/components/mqtt-subscribe-packet-subscription/readonly/standard/standard-mqtt-subscribe-packet-subscription.type';
import {
  IStandardMqttSubscribePacket,
} from '../../../../packets/built-in/08-mqtt-subscribe-packet/readonly/standard/standard-mqtt-subscribe-packet.type';
import {
  IStandardMqttSubackPacket,
} from '../../../../packets/built-in/09-mqtt-suback-packet/readonly/standard/standard-mqtt-suback-packet.type';

export interface IMqttClientSubscribeFunctionOptions extends //
  Pick<IStandardMqttSubscribePacketSubscription, 'topic'>,
  Partial<Pick<IStandardMqttSubscribePacketSubscription, 'qos' | 'noLocal' | 'retainAsPublished' | 'retainHandling'>>,
  Partial<Pick<IStandardMqttSubscribePacket, 'packetId' | 'properties'>>
//
{
  abortable: Abortable;
}

export interface IMqttClientSubscribeFunction {
  (
    options: IMqttClientSubscribeFunctionOptions,
  ): AsyncTask<IStandardMqttSubackPacket>;
}
