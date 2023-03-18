import { AsyncTask } from '@lirx/async-task';
import {
  IWebSocketStreamUntilClosedFunction,
} from '@lirx/stream/src/built-in/web-socket-stream/traits/until-closed/web-socket-stream.until-closed.function-definition';
import {
  IOpenWebSocketAdvancedMqttClientOptions,
  openWebSocketAdvancedMqttClient,
} from '../../../../advanced/implementations/web-socket/open-web-socket-advanced-mqtt-client';
import { IWebSocketAdvancedMqttClient } from '../../../../advanced/implementations/web-socket/websocket-advanced-mqtt-client.type';
import { IMqttClient } from '../../../mqtt-client.type';
import { IMqttClientDisconnectFunction } from '../../../traits/disconnect/mqtt-client.disconnect.function-definition';
import { createMqttClientFromAdvancedMqttClient } from '../create-mqtt-client-from-advanced-mqtt-client';
import { IWebSocketMqttClient } from './websocket-mqtt-client.type';

export interface IOpenWebSocketMqttClientOptions extends IOpenWebSocketAdvancedMqttClientOptions {
}

export function openWebSocketMqttClient(
  options: IOpenWebSocketMqttClientOptions,
): AsyncTask<IWebSocketMqttClient> {
  return openWebSocketAdvancedMqttClient(options)
    .successful((websocketAdvancedMqttClient: IWebSocketAdvancedMqttClient): IWebSocketMqttClient => {
      const mqttClient: IMqttClient = createMqttClientFromAdvancedMqttClient(websocketAdvancedMqttClient);

      const _disconnect: IMqttClientDisconnectFunction = mqttClient.disconnect;

      const disconnect: IMqttClientDisconnectFunction = (
        ...args: Parameters<IMqttClientDisconnectFunction>
      ): ReturnType<IMqttClientDisconnectFunction> => {
        return _disconnect(...args)
          .successful(() => {
            try {
              websocketAdvancedMqttClient.close();
            } catch {
            }
          });
      };

      const untilClosed: IWebSocketStreamUntilClosedFunction = websocketAdvancedMqttClient.untilClosed;

      return {
        ...mqttClient,
        disconnect,
        untilClosed,
      };
    });
}
