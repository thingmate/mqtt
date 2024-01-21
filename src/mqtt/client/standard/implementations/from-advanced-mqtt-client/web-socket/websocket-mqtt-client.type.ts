import { IWebSocketStream } from '@lirx/stream';
import { IMqttClient } from '../../../mqtt-client.type';

export interface IWebSocketMqttClient extends //
  IMqttClient,
Pick<IWebSocketStream, 'getState' | 'untilClosed'>
//
{
}
