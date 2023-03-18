import { IReadonlyMqttPacketId } from './readonly/readonly-mqtt-packet-id.type';
import { IMqttPacketIdSetTrait } from './traits/set/mqtt-packet-id.set.trait';

export interface IMqttPacketId extends IReadonlyMqttPacketId, //
  IMqttPacketIdSetTrait
//
{

}
