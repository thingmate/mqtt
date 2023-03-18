import { IReadonlyMqttConnectPacketWillGetPayloadTrait } from './traits/get-payload/readonly-mqtt-connect-packet-will.get-payload.trait';
import {
  IReadonlyMqttConnectPacketWillGetPropertiesTrait,
} from './traits/get-properties/readonly-mqtt-connect-packet-will.get-properties.trait';
import { IReadonlyMqttConnectPacketWillGetQoSTrait } from './traits/get-qos/readonly-mqtt-connect-packet-will.get-qos.trait';
import { IReadonlyMqttConnectPacketWillGetRetainTrait } from './traits/get-retain/readonly-mqtt-connect-packet-will.get-retain.trait';
import { IReadonlyMqttConnectPacketWillGetTopicTrait } from './traits/get-topic/readonly-mqtt-connect-packet-will.get-topic.trait';

export interface IReadonlyMqttConnectPacketWill extends //
  IReadonlyMqttConnectPacketWillGetRetainTrait,
  IReadonlyMqttConnectPacketWillGetQoSTrait,
  IReadonlyMqttConnectPacketWillGetPropertiesTrait,
  IReadonlyMqttConnectPacketWillGetTopicTrait,
  IReadonlyMqttConnectPacketWillGetPayloadTrait
//
{

}
