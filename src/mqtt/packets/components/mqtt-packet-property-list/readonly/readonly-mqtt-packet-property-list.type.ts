import { IGenericReadonlyMqttPacketProperty } from '../components/mqtt-packet-property/readonly/readonly-mqtt-packet-property.type';
import { IReadonlyMqttPacketPropertyListGetSizeTrait } from './traits/get-size/readonly-mqtt-packet-property-list.get-size.trait';
import { IReadonlyMqttPacketPropertyListGetTrait } from './traits/get/readonly-mqtt-packet-property-list.get.trait';
import {
  IReadonlyMqttPacketPropertyListListPropertiesTrait,
} from './traits/list-properties/readonly-mqtt-packet-property-list.list-properties.trait';

export interface IReadonlyMqttPacketPropertyList<GProperty extends IGenericReadonlyMqttPacketProperty> extends //
  IReadonlyMqttPacketPropertyListListPropertiesTrait<GProperty>,
  IReadonlyMqttPacketPropertyListGetTrait<GProperty>,
  IReadonlyMqttPacketPropertyListGetSizeTrait
//
{

}

export type IGenericReadonlyMqttPacketPropertyList = IReadonlyMqttPacketPropertyList<IGenericReadonlyMqttPacketProperty>;
