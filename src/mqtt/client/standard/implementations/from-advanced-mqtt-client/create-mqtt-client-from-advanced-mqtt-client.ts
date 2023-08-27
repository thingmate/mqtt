import { Abortable, AbortableController } from '@lirx/async-task';
import { IAdvancedMqttClient } from '../../../advanced/advanced-mqtt-client.type';
import { IMqttClient } from '../../mqtt-client.type';
import { IMqttClientConnectFunction } from '../../traits/connect/mqtt-client.connect.function-definition';
import { IMqttClientDisconnectFunction } from '../../traits/disconnect/mqtt-client.disconnect.function-definition';
import { IMqttClientObserveFunction } from '../../traits/observe/mqtt-client.observe.function-definition';
import { IMqttClientOnFunction } from '../../traits/on/mqtt-client.on.function-definition';
import { IMqttClientPublishFunction } from '../../traits/publish/mqtt-client.publish.function-definition';
import { IMqttClientSubscribeFunction } from '../../traits/subscribe/mqtt-client.subscribe.function-definition';
import { IMqttClientUnsubscribeFunction } from '../../traits/unsubscribe/mqtt-client.unsubscribe.function-definition';
import {
  createMqttClientConnectFunctionFromAdvancedMqttClient,
} from './traits/connect/create-mqtt-client-connect-function-from-advanced-mqtt-client';
import {
  createMqttClientDisconnectFunctionFromAdvancedMqttClient,
} from './traits/disconnect/create-mqtt-client-disconnect-function-from-advanced-mqtt-client';
import {
  createMqttClientObserveFunctionFromAdvancedMqttClient,
} from './traits/observe/create-mqtt-client-observe-function-from-advanced-mqtt-client';
import { createMqttClientOnFunctionFromAdvancedMqttClient } from './traits/on/create-mqtt-client-on-function-from-advanced-mqtt-client';
import {
  createMqttClientPublishFunctionFromAdvancedMqttClient,
} from './traits/publish/create-mqtt-client-publish-function-from-advanced-mqtt-client';
import {
  createMqttClientSubscribeFunctionFromAdvancedMqttClient,
} from './traits/subscribe/create-mqtt-client-subscribe-function-from-advanced-mqtt-client';
import {
  createMqttClientUnsubscribeFunctionFromAdvancedMqttClient,
} from './traits/unsubscribe/create-mqtt-client-unsubscribe-function-from-advanced-mqtt-client';

export function createMqttClientFromAdvancedMqttClient(
  advancedMqttClient: IAdvancedMqttClient,
): IMqttClient {
  const globalAbortableController: AbortableController = new AbortableController();
  const globalAbortable: Abortable = globalAbortableController.abortable;

  const connect: IMqttClientConnectFunction = createMqttClientConnectFunctionFromAdvancedMqttClient(advancedMqttClient, globalAbortable);

  const _disconnect: IMqttClientDisconnectFunction = createMqttClientDisconnectFunctionFromAdvancedMqttClient(advancedMqttClient);

  const disconnect: IMqttClientDisconnectFunction = (
    ...args: Parameters<IMqttClientDisconnectFunction>
  ): ReturnType<IMqttClientDisconnectFunction> => {
    globalAbortableController.abort('Disconnect');
    return _disconnect(...args);
  };

  const publish: IMqttClientPublishFunction = createMqttClientPublishFunctionFromAdvancedMqttClient(advancedMqttClient);

  const subscribe: IMqttClientSubscribeFunction = createMqttClientSubscribeFunctionFromAdvancedMqttClient(advancedMqttClient);

  const unsubscribe: IMqttClientUnsubscribeFunction = createMqttClientUnsubscribeFunctionFromAdvancedMqttClient(advancedMqttClient);

  const on: IMqttClientOnFunction = createMqttClientOnFunctionFromAdvancedMqttClient(advancedMqttClient);

  const observe: IMqttClientObserveFunction = createMqttClientObserveFunctionFromAdvancedMqttClient({
    subscribe,
    unsubscribe,
    on,
  });

  return {
    connect,
    disconnect,
    publish,
    subscribe,
    unsubscribe,
    on,
    observe,
  };
}

