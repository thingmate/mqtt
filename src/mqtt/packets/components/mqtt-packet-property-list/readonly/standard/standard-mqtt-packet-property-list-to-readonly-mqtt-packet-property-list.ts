import {
  STANDARD_MQTT_PACKET_USER_PROPERTY_NAME,
} from '../../components/mqtt-packet-property/built-in/38-mqtt-packet-user-property-property/standard/standard-mqtt-packet-user-properties-name.constant';
import {
  standardMqttPacketUserPropertiesToMqttPacketUserPropertyList,
} from '../../components/mqtt-packet-property/built-in/38-mqtt-packet-user-property-property/standard/standard-mqtt-packet-user-properties-to-mqtt-packet-user-property-list';
import { IGenericReadonlyMqttPacketProperty } from '../../components/mqtt-packet-property/readonly/readonly-mqtt-packet-property.type';
import {
  standardMqttPacketPropertyToReadonlyMqttPacketProperty,
} from '../../components/mqtt-packet-property/readonly/standard/standard-mqtt-packet-property-to-readonly-mqtt-packet-property';
import {
  createReadonlyMqttPacketPropertyListFromIterable,
} from '../implementations/create-readonly-mqtt-packet-property-list-from-iterable';
import { IGenericReadonlyMqttPacketPropertyList } from '../readonly-mqtt-packet-property-list.type';
import { IStandardMqttPacketPropertyList } from './standard-mqtt-packet-property-list.type';

export function standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList(
  input: IStandardMqttPacketPropertyList,
): IGenericReadonlyMqttPacketPropertyList {
  const properties: IGenericReadonlyMqttPacketProperty[] = [];

  const keys: string[] = Object.getOwnPropertyNames(input);
  for (let i = 0, l = keys.length; i < l; i++) {
    const key: string = keys[i];
    const value: any = input[key];

    if (key === STANDARD_MQTT_PACKET_USER_PROPERTY_NAME) {
      properties.push(
        ...standardMqttPacketUserPropertiesToMqttPacketUserPropertyList(value),
      );
    } else {
      properties.push(standardMqttPacketPropertyToReadonlyMqttPacketProperty(value));
    }
  }

  return createReadonlyMqttPacketPropertyListFromIterable<IGenericReadonlyMqttPacketProperty>(properties);
}
