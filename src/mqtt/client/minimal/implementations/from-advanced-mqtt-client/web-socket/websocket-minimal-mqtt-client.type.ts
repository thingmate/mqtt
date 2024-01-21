import { IWebSocketStream } from '@lirx/stream';
import { IMinimalMqttClient } from '../../../minimal-mqtt-client.type';

export interface IWebSocketMinimalMqttClient extends //
  IMinimalMqttClient,
  Pick<IWebSocketStream, 'getState' | 'untilClosed'>
//
{
}
