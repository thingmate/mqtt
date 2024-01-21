import { createIterator, IIteratorTraitCollection } from '@lifaon/traits';
import { IGenericReadonlyMqttPacketProperty } from '../../components/mqtt-packet-property/readonly/readonly-mqtt-packet-property.type';
import { IReadonlyMqttPacketPropertyList } from '../readonly-mqtt-packet-property-list.type';
import {
  InferReadonlyMqttPacketPropertyFromName,
  InferReadonlyMqttPacketPropertyName,
  InferReadonlyMqttPacketPropertyValueFromName,
} from '../traits/get/readonly-mqtt-packet-property-list.get.function-definition';

export interface IReadonlyMqttPacketPropertyListContext<GProperty extends IGenericReadonlyMqttPacketProperty> {
  readonly map: Map<string, GProperty[]>;
}

export function createReadonlyMqttPacketPropertyList<GProperty extends IGenericReadonlyMqttPacketProperty>(
  context: IReadonlyMqttPacketPropertyListContext<GProperty>,
): IReadonlyMqttPacketPropertyList<GProperty> {
  /* PROPERTIES */

  const appendProperty = (
    property: GProperty,
  ): void => {
    const name: string = property.getName();
    let list: GProperty[] | undefined = context.map.get(name);
    if (list === void 0) {
      list = [];
      context.map.set(name, list);
    }
    if (list.includes(property)) {
      throw new Error(`Append duplicate property`);
    } else {
      list.push(property);
    }
  };

  function* propertiesIterator() {
    const iterator: Iterator<GProperty[]> = context.map.values();
    let result: IteratorResult<GProperty[]>;
    while (!(result = iterator.next()).done) {
      yield* result.value;
    }
  }

  const listProperties = (): IIteratorTraitCollection<void, GProperty, void> => {
    return createIterator<void, GProperty, void>(propertiesIterator());
  };

  /* MAP */

  const getPropertiesByName = <GName extends InferReadonlyMqttPacketPropertyName<GProperty>>(
    name: GName,
  ): readonly InferReadonlyMqttPacketPropertyFromName<GProperty, GName>[] => {
    return (context.map.get(name) as InferReadonlyMqttPacketPropertyFromName<GProperty, GName>[] | undefined) ?? [];
  };

  const get = <GName extends InferReadonlyMqttPacketPropertyName<GProperty>>(
    name: GName,
  ): InferReadonlyMqttPacketPropertyValueFromName<GProperty, GName> | undefined => {
    const properties: readonly InferReadonlyMqttPacketPropertyFromName<GProperty, GName>[] = getPropertiesByName<GName>(name);
    return (properties.length === 0)
      ? void 0
      : properties[properties.length - 1].getValue();
  };

  const size: number = createIterator(context.map.values()).reduce((size: number, properties: GProperty[]): number => {
    return size + properties.length;
  }, 0);

  const getSize = (): number => {
    return size;
  };

  return {
    listProperties,
    get,
    getSize,
  };
}



