import { IIteratorTraitCollection } from '@lifaon/traits';
import { IGenericReadonlyMqttPacketProperty } from '../../../components/mqtt-packet-property/readonly/readonly-mqtt-packet-property.type';

export interface IReadonlyMqttPacketPropertyListListPropertiesFunction<GProperty extends IGenericReadonlyMqttPacketProperty> {
  (): IIteratorTraitCollection<void, GProperty, void>;
}
