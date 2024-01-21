import { IMinimalMqttClientDisconnectTrait } from './traits/disconnect/minimal-mqtt-client.disconnect.trait';
import { IMinimalMqttClientObserveTrait } from './traits/observe/minimal-mqtt-client.observe.trait';
import { IMinimalMqttClientPublishTrait } from './traits/publish/minimal-mqtt-client.publish.trait';

export interface IMinimalMqttClient extends //
  IMinimalMqttClientObserveTrait,
  IMinimalMqttClientPublishTrait,
  IMinimalMqttClientDisconnectTrait
  //
{

}
