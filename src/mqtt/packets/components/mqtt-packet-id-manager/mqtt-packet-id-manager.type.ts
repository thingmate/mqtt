import { IMqttPacketIdManagerAddTrait } from './traits/add/mqtt-packet-id-manager.add.trait';
import { IMqttPacketIdManagerGetCurrentTrait } from './traits/get-current/mqtt-packet-id-manager.get-current.trait';
import { IMqttPacketIdManagerHasTrait } from './traits/has/mqtt-packet-id-manager.has.trait';
import { IMqttPacketIdManagerNextTrait } from './traits/next/mqtt-packet-id-manager.next.trait';
import { IMqttPacketIdManagerRemoveTrait } from './traits/remove/mqtt-packet-id-manager.remove.trait';

export interface IMqttPacketIdManager extends //
  IMqttPacketIdManagerGetCurrentTrait,
  IMqttPacketIdManagerNextTrait,
  IMqttPacketIdManagerHasTrait,
  IMqttPacketIdManagerAddTrait,
  IMqttPacketIdManagerRemoveTrait
//
{

}
