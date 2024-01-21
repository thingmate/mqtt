import { Abortable, AsyncTask } from '@lirx/async-task';
import {
  IOpenWebSocketAdvancedMqttClientOptions,
  openWebSocketAdvancedMqttClient,
} from '../../../../advanced/implementations/web-socket/open-web-socket-advanced-mqtt-client';
import { IWebSocketAdvancedMqttClient } from '../../../../advanced/implementations/web-socket/websocket-advanced-mqtt-client.type';

import { IMinimalMqttClient } from '../../../minimal-mqtt-client.type';
import { IMinimalMqttClientDisconnectFunction } from '../../../traits/disconnect/minimal-mqtt-client.disconnect.function-definition';
import {
  createMinimalMqttClientFromAdvancedMqttClient,
  ICreateMinimalMqttClientFromAdvancedMqttClientOptions,
} from '../create-minimal-mqtt-client-from-advanced-mqtt-client';
import { IWebSocketMinimalMqttClient } from './websocket-minimal-mqtt-client.type';

export interface IOpenWebSocketMinimalMqttClientOptions extends //
  IOpenWebSocketAdvancedMqttClientOptions,
  Omit<ICreateMinimalMqttClientFromAdvancedMqttClientOptions, 'advancedMqttClient'>
//
{
}

export function openWebSocketMinimalMqttClient(
  options: IOpenWebSocketMinimalMqttClientOptions,
): AsyncTask<IWebSocketMinimalMqttClient> {
  return openWebSocketAdvancedMqttClient(options)
    .successful((websocketAdvancedMqttClient: IWebSocketAdvancedMqttClient, abortable: Abortable): AsyncTask<IWebSocketMinimalMqttClient> => {
      return createMinimalMqttClientFromAdvancedMqttClient({
        ...options,
        advancedMqttClient: websocketAdvancedMqttClient,
        abortable,
      })
        .successful((minimalMinimalMqttClient: IMinimalMqttClient): IWebSocketMinimalMqttClient => {
          const disconnect: IMinimalMqttClientDisconnectFunction = (
            abortable: Abortable,
          ): AsyncTask<void> => {
            return minimalMinimalMqttClient.disconnect(abortable)
              .successful((): void => {
                try {
                  websocketAdvancedMqttClient.close();
                } catch {
                }
              });
          };

          return {
            ...minimalMinimalMqttClient,
            disconnect,
            getState: websocketAdvancedMqttClient.getState,
            untilClosed: websocketAdvancedMqttClient.untilClosed,
          };
        });
    });
}
