import { Abortable, AsyncTask, asyncTimeout } from '@lirx/async-task';
import {
  IAdvancedMqttClientPingLoopFunction,
  IAdvancedMqttClientPingLoopFunctionOptions,
} from '../../../traits/ping-loop/advanced-mqtt-client.ping-loop.function-definition';
import { IAdvancedMqttClientPingFunction } from '../../../traits/ping/advanced-mqtt-client.ping.function-definition';

export interface ICreateAdvancedMqttClientPingFunction {
  ping: IAdvancedMqttClientPingFunction;
}

export function createAdvancedMqttClientPingLoopFunction(
  {
    ping,
  }: ICreateAdvancedMqttClientPingFunction,
): IAdvancedMqttClientPingLoopFunction {
  let started: boolean;

  return (
    {
      abortable,
      ...options
    }: IAdvancedMqttClientPingLoopFunctionOptions,
  ): AsyncTask<void> => {
    if (started) {
      return AsyncTask.error(`ping loop already started`, abortable);
    } else {
      const serverKeepalive: number = roundServerKeepAlive(
        getServerKeepAlive(options),
      ) * 1000;

      const pingLoop = (
        abortable: Abortable,
      ): AsyncTask<void> => {
        return ping(abortable)
          .successful((_, abortable: Abortable): AsyncTask<void> => {
            return asyncTimeout(serverKeepalive, abortable);
          })
          .successful((_, abortable: Abortable): AsyncTask<void> => {
            return pingLoop(abortable);
          });
      };

      return pingLoop(abortable);
    }
  };
}

/*-------*/

type IGetServerKeepAliveOptions = Pick<IAdvancedMqttClientPingLoopFunctionOptions, 'keepalive' | 'connackPacket'>;

function getServerKeepAlive(
  {
    keepalive,
    connackPacket,
  }: IGetServerKeepAliveOptions,
): number {
  if (connackPacket === void 0) {
    return keepalive;
  } else {
    const serverKeepalive: number | undefined = connackPacket.getProperties().get('serverKeepAlive');
    return (serverKeepalive === void 0)
      ? keepalive
      : Math.min(keepalive, serverKeepalive);
  }
}

function roundServerKeepAlive(
  serverKeepalive: number,
): number {
  return Math.max(0, serverKeepalive - 5, Math.floor(serverKeepalive * 0.8));
}

