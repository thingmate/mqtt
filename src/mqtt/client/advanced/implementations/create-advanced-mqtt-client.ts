import { IPurePushSinkWithBackPressure, IPushSourceWithBackPressure } from '@lirx/stream';
import {
  createMqttPacketIdManagerInitializedAtRandom,
} from '../../../packets/components/mqtt-packet-id-manager/implementations/create-mqtt-packet-id-manager-initialized-at-random';
import { IMqttPacketIdManager } from '../../../packets/components/mqtt-packet-id-manager/mqtt-packet-id-manager.type';
import { IGenericMqttPacket } from '../../../packets/components/mqtt-packet/mqtt-packet.type';
import { IAdvancedMqttClient } from '../advanced-mqtt-client.type';
import { IAdvancedMqttClientConnectFunction } from '../traits/connect/advanced-mqtt-client.connect.function-definition';
import { IAdvancedMqttClientDisconnectFunction } from '../traits/disconnect/advanced-mqtt-client.disconnect.function-definition';
import {
  IAdvancedMqttClientGetNextPacketIdFunction,
} from '../traits/get-next-packet-id/advanced-mqtt-client.get-next-packet-id.function-definition';
import { IAdvancedMqttClientInputFunction } from '../traits/input/advanced-mqtt-client.input.function-definition';
import { IAdvancedMqttClientOnFunction } from '../traits/on/advanced-mqtt-client.on.function-definition';
import { IAdvancedMqttClientOutputFunction } from '../traits/output/advanced-mqtt-client.output.function-definition';
import { IAdvancedMqttClientPingLoopFunction } from '../traits/ping-loop/advanced-mqtt-client.ping-loop.function-definition';
import { IAdvancedMqttClientPingFunction } from '../traits/ping/advanced-mqtt-client.ping.function-definition';
import { IAdvancedMqttClientPublishFunction } from '../traits/publish/advanced-mqtt-client.publish.function-definition';
import { IAdvancedMqttClientSubscribeFunction } from '../traits/subscribe/advanced-mqtt-client.subscribe.function-definition';
import { IAdvancedMqttClientUnsubscribeFunction } from '../traits/unsubscribe/advanced-mqtt-client.unsubscribe.function-definition';
import { createAdvancedMqttClientConnectFunction } from './traits/connect/create-advanced-mqtt-client-connect-function';
import { createAdvancedMqttClientDisconnectFunction } from './traits/disconnect/create-advanced-mqtt-client-disconnect-function';
import {
  createAdvancedMqttClientGetNextPacketIdFunction,
} from './traits/get-next-packet-id/create-advanced-mqtt-client-get-next-packet-id-function';
import { createAdvancedMqttClientOnFunction } from './traits/on/create-advanced-mqtt-client-on-function';
import { createAdvancedMqttClientPingLoopFunction } from './traits/ping-loop/create-advanced-mqtt-client-ping-loop-function';
import { createAdvancedMqttClientPingFunction } from './traits/ping/create-advanced-mqtt-client-ping-function';
import { createAdvancedMqttClientPublishFunction } from './traits/publish/create-advanced-mqtt-client-publish-function';
import { createAdvancedMqttClientSubscribeFunction } from './traits/subscribe/create-advanced-mqtt-client-subscribe-function';
import { createAdvancedMqttClientUnsubscribeFunction } from './traits/unsubscribe/create-advanced-mqtt-client-unsubscribe-function';
import { createAdvancedMqttClientWatchFunction } from './traits/watch/create-advanced-mqtt-client-watch-function';

export interface ICreateAdvancedMqttClient {
  readonly input$: IPushSourceWithBackPressure<IGenericMqttPacket>;
  readonly $output: IPurePushSinkWithBackPressure<IGenericMqttPacket>;
}

export function createAdvancedMqttClient(
  options: ICreateAdvancedMqttClient,
): IAdvancedMqttClient {
  const packetIdManager: IMqttPacketIdManager = createMqttPacketIdManagerInitializedAtRandom();

  /* PROPERTIES */

  const input$: IAdvancedMqttClientInputFunction = options.input$;

  const $output: IAdvancedMqttClientOutputFunction = options.$output;

  const getNextPacketId: IAdvancedMqttClientGetNextPacketIdFunction = createAdvancedMqttClientGetNextPacketIdFunction({
    packetIdManager,
  });

  const watch = createAdvancedMqttClientWatchFunction({
    ...options,
    packetIdManager,
  });

  const connect: IAdvancedMqttClientConnectFunction = createAdvancedMqttClientConnectFunction(options);

  const disconnect: IAdvancedMqttClientDisconnectFunction = createAdvancedMqttClientDisconnectFunction(options);

  const ping: IAdvancedMqttClientPingFunction = createAdvancedMqttClientPingFunction(options);

  const pingLoop: IAdvancedMqttClientPingLoopFunction = createAdvancedMqttClientPingLoopFunction({
    ping,
  });

  const subscribe: IAdvancedMqttClientSubscribeFunction = createAdvancedMqttClientSubscribeFunction({
    ...options,
    packetIdManager,
  });

  const unsubscribe: IAdvancedMqttClientUnsubscribeFunction = createAdvancedMqttClientUnsubscribeFunction({
    ...options,
    packetIdManager,
  });

  const publish: IAdvancedMqttClientPublishFunction = createAdvancedMqttClientPublishFunction({
    ...options,
    packetIdManager,
  });

  const on: IAdvancedMqttClientOnFunction = createAdvancedMqttClientOnFunction(options);

  return {
    input$,
    $output,
    getNextPacketId,
    watch,
    connect,
    disconnect,
    ping,
    pingLoop,
    subscribe,
    unsubscribe,
    publish,
    on,
  };
}

