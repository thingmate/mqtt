import { IIMqttPacketUserPropertyEntryGetKeyTrait } from './traits/get-key/mqtt-packet-user-property-entry.get-key.trait';
import { IIMqttPacketUserPropertyEntryGetValueTrait } from './traits/get-value/mqtt-packet-user-property-entry.get-value.trait';

export interface IMqttPacketUserPropertyEntry extends //
  IIMqttPacketUserPropertyEntryGetKeyTrait,
  IIMqttPacketUserPropertyEntryGetValueTrait
//
{

}

