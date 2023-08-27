import { Abortable, AsyncTask, AbortableController } from '@lirx/async-task';
import {
  standardMqttConnectPacketToReadonlyMqttConnectPacket,
} from '../../../../../../packets/built-in/01-mqtt-connect-packet/readonly/standard/standard-mqtt-connect-packet-to-readonly-mqtt-connect-packet';
import {
  IReadonlyMqttConnackPacket,
} from '../../../../../../packets/built-in/02-mqtt-connack-packet/readonly/readonly-mqtt-connack-packet.type';
import {
  readonlyMqttConnackPacketToStandardMqttConnackPacket,
} from '../../../../../../packets/built-in/02-mqtt-connack-packet/readonly/standard/readonly-mqtt-connack-packet-to-standard-mqtt-connack-packet';
import {
  IStandardMqttConnackPacket,
} from '../../../../../../packets/built-in/02-mqtt-connack-packet/readonly/standard/standard-mqtt-connack-packet.type';

import { IAdvancedMqttClient } from '../../../../../advanced/advanced-mqtt-client.type';

import {
  IMqttClientConnectFunction,
  IMqttClientConnectFunctionOptions,
} from '../../../../traits/connect/mqtt-client.connect.function-definition';

export function createMqttClientConnectFunctionFromAdvancedMqttClient(
  advancedMqttClient: IAdvancedMqttClient,
  globalAbortable: Abortable,
): IMqttClientConnectFunction {
  return (
    {
      protocolVersion = 5,
      clean = true,
      keepalive = 60,
      clientId = `client-${crypto.randomUUID()}`,
      properties = {},
      will,
      username,
      password,
      abortable,
    }: IMqttClientConnectFunctionOptions,
  ): AsyncTask<IStandardMqttConnackPacket> => {
    return AsyncTask.switchAbortable(
      advancedMqttClient.connect(
        standardMqttConnectPacketToReadonlyMqttConnectPacket({
          protocolName: 'MQTT',
          protocolVersion,
          clean,
          keepalive,
          clientId,
          properties,
          will,
          username,
          password,
        }),
        new AbortableController([abortable, globalAbortable]).abortable,
      )
        .successful((
          connackPacket: IReadonlyMqttConnackPacket,
        ): IStandardMqttConnackPacket => {
          advancedMqttClient.watch(globalAbortable);

          advancedMqttClient.pingLoop({
            abortable: globalAbortable,
            keepalive,
            connackPacket,
          });

          return readonlyMqttConnackPacketToStandardMqttConnackPacket(connackPacket);
        }),
      abortable,
    );
  };
}
