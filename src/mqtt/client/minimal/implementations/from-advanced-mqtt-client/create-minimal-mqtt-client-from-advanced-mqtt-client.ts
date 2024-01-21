import { Abortable, AbortableController, AsyncTask, IAbortableOptions } from '@lirx/async-task';
import {
  createReadonlyStringBufferFromString,
} from '../../../../../classes/string-buffer/readonly/implementations/create-readonly-string-buffer-from-string';
import {
  createReadonlyMqttConnectPacket,
} from '../../../../packets/built-in/01-mqtt-connect-packet/readonly/implementations/create-readonly-mqtt-connect-packet';
import { IReadonlyMqttConnackPacket } from '../../../../packets/built-in/02-mqtt-connack-packet/readonly/readonly-mqtt-connack-packet.type';
import {
  EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT,
} from '../../../../packets/components/mqtt-packet-property-list/readonly/constants/empty-readonly-mqtt-packet-property-list.constant';
import { IAdvancedMqttClient } from '../../../advanced/advanced-mqtt-client.type';
import { IMinimalMqttClient } from '../../minimal-mqtt-client.type';
import { IMinimalMqttClientDisconnectFunction } from '../../traits/disconnect/minimal-mqtt-client.disconnect.function-definition';
import { IMinimalMqttClientObserveFunction } from '../../traits/observe/minimal-mqtt-client.observe.function-definition';
import { IMinimalMqttClientPublishFunction } from '../../traits/publish/minimal-mqtt-client.publish.function-definition';
import {
  createMinimalMqttClientDisconnectFunctionFromAdvancedMqttClient,
} from './traits/disconnect/create-minimal-mqtt-client-disconnect-function-from-advanced-minimal-mqtt-client';
import {
  createMinimalMqttClientObserveFunctionFromAdvancedMqttClient,
} from './traits/observe/create-minimal-mqtt-client-observe-function-from-advanced-minimal-mqtt-client';
import {
  createMinimalMqttClientPublishFunctionFromAdvancedMqttClient,
} from './traits/publish/create-minimal-mqtt-client-publish-function-from-advanced-minimal-mqtt-client';

export interface ICreateMinimalMqttClientFromAdvancedMqttClientOptions extends IAbortableOptions {
  readonly advancedMqttClient: IAdvancedMqttClient;
  readonly protocolVersion?: 5 | undefined;
  readonly keepalive?: number | undefined;
  readonly clientId?: string | undefined;
  readonly username?: string | undefined;
  readonly password?: string | undefined;
}

export function createMinimalMqttClientFromAdvancedMqttClient(
  {
    advancedMqttClient,
    protocolVersion = 5,
    keepalive = 60,
    clientId = `client-${crypto.randomUUID()}`,
    username,
    password,
    abortable,
  }: ICreateMinimalMqttClientFromAdvancedMqttClientOptions,
): AsyncTask<IMinimalMqttClient> {
  return advancedMqttClient.connect(
    createReadonlyMqttConnectPacket({
      protocolName: 'MQTT',
      protocolVersion,
      clean: true,
      keepalive,
      properties: EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT,
      clientId: createReadonlyStringBufferFromString(clientId),
      will: void 0,
      username: (username === void 0)
        ? void 0
        : createReadonlyStringBufferFromString(username),
      password: (password === void 0)
        ? void 0
        : createReadonlyStringBufferFromString(password),
    }),
    abortable,
  )
    .successful((connackPacket: IReadonlyMqttConnackPacket): IMinimalMqttClient => {
      const globalAbortableController: AbortableController = new AbortableController();
      const globalAbortable: Abortable = globalAbortableController.abortable;

      const observe: IMinimalMqttClientObserveFunction = createMinimalMqttClientObserveFunctionFromAdvancedMqttClient(advancedMqttClient);
      const publish: IMinimalMqttClientPublishFunction = createMinimalMqttClientPublishFunctionFromAdvancedMqttClient(advancedMqttClient);
      const disconnect: IMinimalMqttClientDisconnectFunction = createMinimalMqttClientDisconnectFunctionFromAdvancedMqttClient(advancedMqttClient, globalAbortableController);

      advancedMqttClient.watch(globalAbortable);

      advancedMqttClient.pingLoop({
        abortable: globalAbortable,
        keepalive,
        connackPacket,
      });

      return {
        observe,
        publish,
        disconnect,
      };
    });
}
