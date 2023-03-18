import { IAdvancedMqttClientConnectTrait } from './traits/connect/advanced-mqtt-client.connect.trait';
import { IAdvancedMqttClientDisconnectTrait } from './traits/disconnect/advanced-mqtt-client.disconnect.trait';
import { IAdvancedMqttClientGetNextPacketIdTrait } from './traits/get-next-packet-id/advanced-mqtt-client.get-next-packet-id.trait';
import { IAdvancedMqttClientInputTrait } from './traits/input/advanced-mqtt-client.input.trait';

import { IAdvancedMqttClientOnTrait } from './traits/on/advanced-mqtt-client.on.trait';
import { IAdvancedMqttClientOutputTrait } from './traits/output/advanced-mqtt-client.output.trait';
import { IAdvancedMqttClientPingLoopTrait } from './traits/ping-loop/advanced-mqtt-client.ping-loop.trait';
import { IAdvancedMqttClientPingTrait } from './traits/ping/advanced-mqtt-client.ping.trait';
import { IAdvancedMqttClientPublishTrait } from './traits/publish/advanced-mqtt-client.publish.trait';
import { IAdvancedMqttClientSubscribeTrait } from './traits/subscribe/advanced-mqtt-client.subscribe.trait';
import { IAdvancedMqttClientUnsubscribeTrait } from './traits/unsubscribe/advanced-mqtt-client.unsubscribe.trait';
import { IAdvancedMqttClientWatchTrait } from './traits/watch/advanced-mqtt-client.watch.trait';

export interface IAdvancedMqttClient extends //
  IAdvancedMqttClientInputTrait,
  IAdvancedMqttClientOutputTrait,
  IAdvancedMqttClientGetNextPacketIdTrait,
  IAdvancedMqttClientWatchTrait,
  IAdvancedMqttClientConnectTrait,
  IAdvancedMqttClientDisconnectTrait,
  IAdvancedMqttClientPingTrait,
  IAdvancedMqttClientPingLoopTrait,
  IAdvancedMqttClientSubscribeTrait,
  IAdvancedMqttClientUnsubscribeTrait,
  IAdvancedMqttClientPublishTrait,
  IAdvancedMqttClientOnTrait
//
{

}
