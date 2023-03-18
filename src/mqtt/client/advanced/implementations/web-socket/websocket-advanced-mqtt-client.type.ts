import { IWebSocketStream } from '@lirx/stream';
import { IAdvancedMqttClient } from '../../advanced-mqtt-client.type';

export interface IWebSocketAdvancedMqttClient extends IAdvancedMqttClient, Pick<IWebSocketStream, 'close' | 'untilClosed'> {
}
