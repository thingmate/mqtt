import { AsyncTask } from '@lirx/async-task';
import { pipeNow } from '@lirx/core';
import {
  createSharePushPipeWithBackPressure,
  IOpenWebSocketStreamOptions,
  IPushSourceWithBackPressure,
  IWebSocketStream,
  openWebSocketStream,
} from '@lirx/stream';
import { IMqttProtocolVersion } from '../../../../constants/mqtt-protocol-version.type';
import { IGenericMqttPacket } from '../../../../packets/components/mqtt-packet/mqtt-packet.type';
import { createAdvancedMqttClient } from '../create-advanced-mqtt-client';
import { createMapArrayBufferToMqttPacketWithBackPressure } from '../functions/map-array-buffer-to-mqtt-packet-with-back-pressure';
import { mapMqttPacketToUint8ArrayWithBackPressure } from '../functions/map-mqtt-packet-to-uint8-array-with-back-pressure';
import { IWebSocketAdvancedMqttClient } from './websocket-advanced-mqtt-client.type';

export interface IOpenWebSocketAdvancedMqttClientOptions extends Omit<IOpenWebSocketStreamOptions, 'binaryType'> {
  readonly protocolVersion?: IMqttProtocolVersion,
}

export function openWebSocketAdvancedMqttClient(
  {
    url,
    protocols = ['mqtt'],
    protocolVersion = 5,
    ...options
  }: IOpenWebSocketAdvancedMqttClientOptions,
): AsyncTask<IWebSocketAdvancedMqttClient> {
  return openWebSocketStream(
    {
      ...options,
      url,
      binaryType: 'arraybuffer',
      protocols,
    },
  )
    .successful((websocketStream: IWebSocketStream): IWebSocketAdvancedMqttClient => {
      const input$ = pipeNow(websocketStream.input$ as IPushSourceWithBackPressure<ArrayBuffer>, [
        createMapArrayBufferToMqttPacketWithBackPressure({
          protocolVersion,
        }),
        createSharePushPipeWithBackPressure<IGenericMqttPacket>(),
      ]);

      const $output = mapMqttPacketToUint8ArrayWithBackPressure(websocketStream.$output, {
        protocolVersion,
      });

      const getState = websocketStream.getState;
      const close = websocketStream.close;
      const untilClosed = websocketStream.untilClosed;

      return {
        ...createAdvancedMqttClient({
          input$,
          $output,
        }),
        getState,
        close,
        untilClosed,
      };
    });
}
