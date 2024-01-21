import { IGenericReadonlyMqttPacketProperty } from '../../../components/mqtt-packet-property/readonly/readonly-mqtt-packet-property.type';
import {
  IReadonlyMqttPacketPropertyListListPropertiesFunction,
} from './readonly-mqtt-packet-property-list.list-properties.function-definition';

export interface IReadonlyMqttPacketPropertyListListPropertiesTrait<GProperty extends IGenericReadonlyMqttPacketProperty> {
  readonly listProperties: IReadonlyMqttPacketPropertyListListPropertiesFunction<GProperty>;
}
