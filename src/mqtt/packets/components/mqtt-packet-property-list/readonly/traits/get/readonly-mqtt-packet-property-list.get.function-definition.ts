import {
  IGenericReadonlyMqttPacketProperty,
  IReadonlyMqttPacketProperty,
} from '../../../components/mqtt-packet-property/readonly/readonly-mqtt-packet-property.type';

export interface IReadonlyMqttPacketPropertyListGetFunction<GProperty extends IGenericReadonlyMqttPacketProperty> {
  <GName extends InferReadonlyMqttPacketPropertyName<GProperty>>(
    name: GName,
  ): InferReadonlyMqttPacketPropertyValueFromName<GProperty, GName> | undefined;
}

export type InferReadonlyMqttPacketPropertyName<GProperty extends IGenericReadonlyMqttPacketProperty> =
  GProperty extends IReadonlyMqttPacketProperty<number, infer GName, any>
    ? GName
    : never
  ;

export type InferReadonlyMqttPacketPropertyFromName<GProperty extends IGenericReadonlyMqttPacketProperty, GName extends InferReadonlyMqttPacketPropertyName<GProperty>> =
  GProperty extends IReadonlyMqttPacketProperty<number, GName, any>
    ? GProperty
    : never
  ;

export type InferReadonlyMqttPacketPropertyValueFromName<GProperty extends IGenericReadonlyMqttPacketProperty, GName extends InferReadonlyMqttPacketPropertyName<GProperty>> =
  GProperty extends IReadonlyMqttPacketProperty<number, GName, infer GValue>
    ? GValue
    : never
  ;
