import {
  mqttPacketUserPropertyToStandardMqttPacketUserPropertyType,
} from '../../components/mqtt-packet-property/built-in/38-mqtt-packet-user-property-property/components/mqtt-packet-user-property-entry/standard/mqtt-packet-user-property-entry-to-standard-mqtt-packet-user-property-entry';
import {
  MQTT_PACKET_USER_PROPERTY_CODE,
} from '../../components/mqtt-packet-property/built-in/38-mqtt-packet-user-property-property/constants/mqtt-packet-user-property-code.constant';
import {
  STANDARD_MQTT_PACKET_USER_PROPERTY_NAME,
} from '../../components/mqtt-packet-property/built-in/38-mqtt-packet-user-property-property/standard/standard-mqtt-packet-user-properties-name.constant';
import { IGenericReadonlyMqttPacketProperty } from '../../components/mqtt-packet-property/readonly/readonly-mqtt-packet-property.type';
import {
  readonlyMqttPacketPropertyToStandardMqttPacketProperty,
} from '../../components/mqtt-packet-property/readonly/standard/readonly-mqtt-packet-property-to-standard-mqtt-packet-property';
import { IGenericReadonlyMqttPacketPropertyList } from '../readonly-mqtt-packet-property-list.type';
import { IStandardMqttPacketPropertyList } from './standard-mqtt-packet-property-list.type';

export function readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList(
  {
    listProperties,
  }: IGenericReadonlyMqttPacketPropertyList,
): IStandardMqttPacketPropertyList {
  const list: IStandardMqttPacketPropertyList = {};

  const iterator: Iterator<IGenericReadonlyMqttPacketProperty> = listProperties();
  let result: IteratorResult<IGenericReadonlyMqttPacketProperty>;
  while (!(result = iterator.next()).done) {
    const property: IGenericReadonlyMqttPacketProperty = result.value;

    if (property.getCode() === MQTT_PACKET_USER_PROPERTY_CODE) {
      if (list[STANDARD_MQTT_PACKET_USER_PROPERTY_NAME] === void 0) {
        list[STANDARD_MQTT_PACKET_USER_PROPERTY_NAME] = {};
      }
      Object.assign(list[STANDARD_MQTT_PACKET_USER_PROPERTY_NAME], mqttPacketUserPropertyToStandardMqttPacketUserPropertyType(property.getValue()));
    } else {
      Object.assign(list, readonlyMqttPacketPropertyToStandardMqttPacketProperty(property));
    }
  }

  return list;
}
