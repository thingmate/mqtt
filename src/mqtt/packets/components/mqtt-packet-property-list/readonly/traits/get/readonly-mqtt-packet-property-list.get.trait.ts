import { IGenericReadonlyMqttPacketProperty } from '../../../components/mqtt-packet-property/readonly/readonly-mqtt-packet-property.type';
import { IReadonlyMqttPacketPropertyListGetFunction } from './readonly-mqtt-packet-property-list.get.function-definition';

export interface IReadonlyMqttPacketPropertyListGetTrait<GProperty extends IGenericReadonlyMqttPacketProperty> {
  get: IReadonlyMqttPacketPropertyListGetFunction<GProperty>;
}
