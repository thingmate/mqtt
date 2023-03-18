import { IGenericReadonlyMqttPacketProperty } from '../../components/mqtt-packet-property/readonly/readonly-mqtt-packet-property.type';
import { IReadonlyMqttPacketPropertyList } from '../readonly-mqtt-packet-property-list.type';
import { createReadonlyMqttPacketPropertyList } from './create-readonly-mqtt-packet-property-list';

export function createReadonlyMqttPacketPropertyListFromIterable<GProperty extends IGenericReadonlyMqttPacketProperty>(
  properties: Iterable<GProperty>,
): IReadonlyMqttPacketPropertyList<GProperty> {
  const map: Map<string, GProperty[]> = new Map<string, GProperty[]>();

  const iterator: Iterator<GProperty> = properties[Symbol.iterator]();
  let result: IteratorResult<GProperty>;
  while (!(result = iterator.next()).done) {
    const property: GProperty = result.value;
    const name: string = property.getName();
    let list: GProperty[] | undefined = map.get(name);
    if (list === void 0) {
      list = [];
      map.set(name, list);
    }
    if (list.includes(property)) {
      throw new Error(`Append duplicate property`);
    } else {
      list.push(property);
    }
  }

  return createReadonlyMqttPacketPropertyList({ map });
}
