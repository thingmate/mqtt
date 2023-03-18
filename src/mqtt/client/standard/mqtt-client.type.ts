import { IMqttClientConnectTrait } from './traits/connect/mqtt-client.connect.trait';
import { IMqttClientDisconnectTrait } from './traits/disconnect/mqtt-client.disconnect.trait';
import { IMqttClientObserveTrait } from './traits/observe/mqtt-client.observe.trait';
import { IMqttClientOnTrait } from './traits/on/mqtt-client.on.trait';
import { IMqttClientPublishTrait } from './traits/publish/mqtt-client.publish.trait';
import { IMqttClientSubscribeTrait } from './traits/subscribe/mqtt-client.subscribe.trait';
import { IMqttClientUnsubscribeTrait } from './traits/unsubscribe/mqtt-client.unsubscribe.trait';

export interface IMqttClient extends //
  IMqttClientConnectTrait,
  IMqttClientDisconnectTrait,
  IMqttClientPublishTrait,
  IMqttClientSubscribeTrait,
  IMqttClientUnsubscribeTrait,
  IMqttClientOnTrait,
  IMqttClientObserveTrait
  //
{

}
