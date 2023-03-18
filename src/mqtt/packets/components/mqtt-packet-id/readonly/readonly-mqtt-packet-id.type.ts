import { IValueOfTrait } from '@lifaon/traits';
import { IMqttPacketIdValue } from '../types/mqtt-packet-value.type';
import { IReadonlyMqttPacketIdGetTrait } from './traits/get/readonly-mqtt-packet-id.get.trait';

export interface IReadonlyMqttPacketId extends //
  IReadonlyMqttPacketIdGetTrait,
  IValueOfTrait<IMqttPacketIdValue>
//
{

}
