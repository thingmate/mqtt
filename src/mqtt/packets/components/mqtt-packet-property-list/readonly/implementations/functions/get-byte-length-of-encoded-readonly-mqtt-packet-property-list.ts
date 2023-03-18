import {
  getByteLengthOfEncodedReadonlyMqttPacketProperty,
} from '../../../components/mqtt-packet-property/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-property';
import { IGenericReadonlyMqttPacketProperty } from '../../../components/mqtt-packet-property/readonly/readonly-mqtt-packet-property.type';
import { IGenericReadonlyMqttPacketPropertyList } from '../../readonly-mqtt-packet-property-list.type';

export function getByteLengthOfEncodedReadonlyMqttPacketPropertyList(
  input: IGenericReadonlyMqttPacketPropertyList,
): number {
  return input.listProperties().reduce((length: number, property: IGenericReadonlyMqttPacketProperty): number => {
    return length + getByteLengthOfEncodedReadonlyMqttPacketProperty(property);
  }, 0);
}
