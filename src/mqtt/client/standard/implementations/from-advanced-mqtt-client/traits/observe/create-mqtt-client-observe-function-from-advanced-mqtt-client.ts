import { Abortable, AsyncTask } from '@lirx/async-task';
import { IObservable, IObserver, IUnsubscribeOfObservable } from '@lirx/core';
import {
  IStandardMqttPublishPacket,
} from '../../../../../../packets/built-in/03-mqtt-publish-packet/readonly/standard/standard-mqtt-publish-packet.type';
import {
  IReadonlyMqttPacketPayload,
} from '../../../../../../packets/components/mqtt-packet-payload/readonly/readonly-mqtt-packet-payload.type';
import { IMqttClientObserveFunction } from '../../../../traits/observe/mqtt-client.observe.function-definition';
import { IMqttClientOnFunction } from '../../../../traits/on/mqtt-client.on.function-definition';
import { IMqttClientSubscribeFunction } from '../../../../traits/subscribe/mqtt-client.subscribe.function-definition';
import { IMqttClientUnsubscribeFunction } from '../../../../traits/unsubscribe/mqtt-client.unsubscribe.function-definition';

export interface ICreateMqttClientObserveFunctionFromAdvancedMqttClientOptions {
  subscribe: IMqttClientSubscribeFunction;
  unsubscribe: IMqttClientUnsubscribeFunction;
  on: IMqttClientOnFunction;
}

export function createMqttClientObserveFunctionFromAdvancedMqttClient(
  {
    subscribe,
    unsubscribe,
    on,
  }: ICreateMqttClientObserveFunctionFromAdvancedMqttClientOptions,
): IMqttClientObserveFunction {
  return (
    topic: string,
  ): IObservable<IReadonlyMqttPacketPayload> => {
    const observable = (
      emit: IObserver<IReadonlyMqttPacketPayload>,
    ): IUnsubscribeOfObservable => {
      let running: boolean = true;

      const [abort, abortable] = Abortable.derive();

      const source = on(topic);

      source(
        (
          packet: IStandardMqttPublishPacket,
          abortable: Abortable,
        ): AsyncTask<void> => {
          emit(packet.payload);
          return AsyncTask.void(abortable);
        },
        abortable,
      );

      subscribe({
        topic,
        abortable,
      });

      return (): void => {
        if (running) {
          running = false;
          abort('Aborted');
          unsubscribe({
            topic,
            abortable: Abortable.never,
          });
        }
      };
    };

    return observable;
  };
}
