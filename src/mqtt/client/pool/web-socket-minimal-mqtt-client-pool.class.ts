import { Abortable, AbortableController, AsyncTask, IAbortableOptions } from '@lirx/async-task';
import { hashData } from '../../../misc/hash-data.private';
import {
  IOpenWebSocketMinimalMqttClientOptions,
  openWebSocketMinimalMqttClient,
} from '../minimal/implementations/from-advanced-mqtt-client/web-socket/open-web-socket-minimal-mqtt-client';
import {
  IWebSocketMinimalMqttClient,
} from '../minimal/implementations/from-advanced-mqtt-client/web-socket/websocket-minimal-mqtt-client.type';

/* TYPES */

export interface IWebSocketMinimalMqttClientPoolOpenOptions extends IAbortableOptions, IOpenWebSocketMinimalMqttClientOptions {

}

export interface IWebSocketMinimalMqttClientFromPool extends Omit<IWebSocketMinimalMqttClient, 'disconnect'> {
  readonly dispose: () => void;
}

interface IWebSocketMinimalMqttClientPoolOpenTask {
  readonly openTask: AsyncTask<IWebSocketMinimalMqttClient>;
  readonly controller: AbortableController;
  readonly clients: Set<IWebSocketMinimalMqttClientFromPool>;
}

/* CLASS */

export class WebSocketMinimalMqttClientPool {
  readonly #pool: Map<string, IWebSocketMinimalMqttClientPoolOpenTask>;

  constructor() {
    this.#pool = new Map<string, IWebSocketMinimalMqttClientPoolOpenTask>();
  }

  open(
    {
      url,
      protocols = ['mqtt'],
      protocolVersion = 5,
      keepalive = 60,
      clientId,
      username,
      password,
      abortable,
    }: IWebSocketMinimalMqttClientPoolOpenOptions,
  ): AsyncTask<IWebSocketMinimalMqttClientFromPool> {
    if (typeof protocols === 'string') {
      protocols = [protocols];
    }
    if (typeof url === 'string') {
      url = new URL(url);
    }

    return hashData(
      [
        url.href,
        protocols,
        protocolVersion,
        keepalive,
        clientId,
        username,
        password,
      ],
      abortable,
    )
      .successful((key: string, abortable: Abortable): AsyncTask<IWebSocketMinimalMqttClientFromPool> => {
        let openTaskWithController: IWebSocketMinimalMqttClientPoolOpenTask | undefined = this.#pool.get(key);

        if (openTaskWithController === void 0) {
          const controller: AbortableController = new AbortableController();
          const openTask: AsyncTask<IWebSocketMinimalMqttClient> = openWebSocketMinimalMqttClient({
            url,
            protocols,
            protocolVersion,
            keepalive,
            clientId,
            username,
            password,
            abortable: controller.abortable,
          })
            .successful((client: IWebSocketMinimalMqttClient, abortable: Abortable): IWebSocketMinimalMqttClient => {
              client.untilClosed(Abortable.never)
                .successful((): void => {
                  this.#pool.delete(key);
                });
              return client;
            })
            .errored((error: unknown): never => {
              this.#pool.delete(key);
              throw error;
            });

          openTaskWithController = {
            openTask,
            controller,
            clients: new Set<IWebSocketMinimalMqttClientFromPool>(),
          };

          this.#pool.set(key, openTaskWithController);
        }

        const { openTask, controller, clients } = openTaskWithController;

        return AsyncTask.switchAbortable(openTask, abortable)
          .successful(({ disconnect, ...client }: IWebSocketMinimalMqttClient): IWebSocketMinimalMqttClientFromPool => {
            const newClient: IWebSocketMinimalMqttClientFromPool = {
              ...client,
              dispose: (): void => {
                if (clients.has(newClient)) {
                  clients.delete(newClient);
                  if (clients.size === 0) {
                    disconnect(Abortable.never);
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
