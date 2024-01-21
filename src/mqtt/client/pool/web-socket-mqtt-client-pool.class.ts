import { Abortable, AbortableController, AsyncTask, IAbortableOptions, IAsyncTaskInput } from '@lirx/async-task';
import { noop } from '@lirx/utils';
import {
  IOpenWebSocketMqttClientOptions,
  openWebSocketMqttClient,
} from '../standard/implementations/from-advanced-mqtt-client/web-socket/open-web-socket-mqtt-client';
import { IWebSocketMqttClient } from '../standard/implementations/from-advanced-mqtt-client/web-socket/websocket-mqtt-client.type';
import { IMqttClientConnectFunctionOptions } from '../standard/traits/connect/mqtt-client.connect.function-definition';

/* TYPES */

export type IOpenWebSocketMqttClientFunction = typeof openWebSocketMqttClient;

export interface IWebSocketMqttClientPoolAfterFirstConnectFunction {
  (
    client: IWebSocketMqttClient,
    abortable: Abortable,
  ): IAsyncTaskInput<any>;
}

export interface IWebSocketMqttClientPoolOptions {
  readonly openWebSocketMqttClient?: IOpenWebSocketMqttClientFunction;
  readonly afterFirstConnect?: IWebSocketMqttClientPoolAfterFirstConnectFunction;
}

export interface IWebSocketMqttClientPoolOpenOptions extends IAbortableOptions, IOpenWebSocketMqttClientOptions, IMqttClientConnectFunctionOptions {

}

export interface IWebSocketMqttClientFromPool extends Omit<IWebSocketMqttClient, 'connect' | 'disconnect'> {
  readonly dispose: () => void;
}

interface IWebSocketMqttClientPoolOpenTask {
  readonly openTask: AsyncTask<IWebSocketMqttClient>;
  readonly controller: AbortableController;
  readonly clients: Set<IWebSocketMqttClientFromPool>;
}

/* CLASS */

/**
 * @deprecated
 * TODO improve and see if useful
 */
export class WebSocketMqttClientPool {

  static hash(
    data: any,
    abortable: Abortable,
  ): AsyncTask<string> {
    return AsyncTask.fromFactory((): Promise<ArrayBuffer> => {
      return crypto.subtle.digest(
        'SHA-256',
        new TextEncoder().encode(JSON.stringify(data)),
      );
    }, abortable)
      .successful((key: ArrayBuffer): string => {
        return [...new Uint8Array(key)]
          .map(x => x.toString(16).padStart(2, '0'))
          .join('');
      });
  }

  readonly #pool: Map<string, IWebSocketMqttClientPoolOpenTask>;
  readonly #openWebSocketMqttClient: IOpenWebSocketMqttClientFunction;
  readonly #afterFirstConnect: IWebSocketMqttClientPoolAfterFirstConnectFunction;

  constructor(
    {
      openWebSocketMqttClient: _openWebSocketMqttClient = openWebSocketMqttClient,
      afterFirstConnect = noop,
    }: IWebSocketMqttClientPoolOptions = {},
  ) {
    this.#pool = new Map<string, IWebSocketMqttClientPoolOpenTask>();
    this.#openWebSocketMqttClient = _openWebSocketMqttClient;
    this.#afterFirstConnect = afterFirstConnect;
  }

  open(
    {
      url,
      protocols = ['mqtt'],
      protocolVersion = 5,
      clean = true,
      keepalive = 60,
      clientId,
      properties = {},
      will,
      username,
      password,
      abortable,
    }: IWebSocketMqttClientPoolOpenOptions,
  ): AsyncTask<IWebSocketMqttClientFromPool> {
    if (typeof protocols === 'string') {
      protocols = [protocols];
    }
    if (typeof url === 'string') {
      url = new URL(url);
    }

    return WebSocketMqttClientPool.hash(
      [
        url.href,
        protocols,
        protocolVersion,
        clean,
        keepalive,
        clientId,
        properties,
        will,
        username,
        password,
      ],
      abortable,
    )
      .successful((key: string, abortable: Abortable): AsyncTask<IWebSocketMqttClientFromPool> => {
        let openTaskWithController: IWebSocketMqttClientPoolOpenTask | undefined = this.#pool.get(key);

        if (openTaskWithController === void 0) {
          const controller: AbortableController = new AbortableController();
          const openTask: AsyncTask<IWebSocketMqttClient> = this.#openWebSocketMqttClient({
            url,
            protocols,
            protocolVersion,
            abortable: controller.abortable,
          })
            .successful((client: IWebSocketMqttClient, abortable: Abortable): AsyncTask<IWebSocketMqttClient> => {
              return client.connect({
                protocolVersion,
                keepalive,
                clientId,
                username,
                password,
                abortable,
              })
                .successful((_, abortable: Abortable): IAsyncTaskInput<any> => {
                  return this.#afterFirstConnect(client, abortable);
                })
                .successful((_, abortable: Abortable): IWebSocketMqttClient => {
                  client.untilClosed(abortable)
                    .successful((): void => {
                      this.#pool.delete(key);
                    });
                  return client;
                });
            })
            .errored((error: unknown): never => {
              this.#pool.delete(key);
              throw error;
            });

          openTaskWithController = {
            openTask,
            controller,
            clients: new Set<IWebSocketMqttClientFromPool>(),
          };

          this.#pool.set(key, openTaskWithController);
        }

        const { openTask, controller, clients } = openTaskWithController;

        return AsyncTask.switchAbortable(openTask, abortable)
          .successful(({ connect, disconnect, ...client }: IWebSocketMqttClient): IWebSocketMqttClientFromPool => {
            const newClient: IWebSocketMqttClientFromPool = {
              ...client,
              dispose: (): void => {
                if (clients.has(newClient)) {
                  clients.delete(newClient);
                  if (clients.size === 0) {
                    disconnect({
                      abortable: Abortable.never,
                    });
                    controller.abort(new Error('No more observers'));
                    this.#pool.delete(key);
                  }
                }
              },
            };

            clients.add(newClient);

            return newClient;
          });
      });
  }
}
