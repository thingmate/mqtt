import {
  standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList,
} from '../../../../../../components/mqtt-packet-property-list/readonly/standard/standard-mqtt-packet-property-list-to-readonly-mqtt-packet-property-list';
import {
  createReadonlyMqttPacketTopicFromString,
} from '../../../../../../components/mqtt-packet-topic/readonly/implementations/create-readonly-mqtt-packet-topic-from-string';
import { createReadonlyMqttConnectPacketWill } from '../implementations/create-readonly-mqtt-connect-packet-will';
import { IReadonlyMqttConnectPacketWill } from '../readonly-mqtt-connect-packet-will.type';
import { IStandardMqttConnectPacketWill } from './standard-mqtt-connect-packet-will.type';

export function standardMqttConnectPacketWillToReadonlyMqttConnectPacketWill(
  {
    retain,
    qos,
    properties,
    topic,
    payload,
  }: IStandardMqttConnectPacketWill,
): IReadonlyMqttConnectPacketWill {
  return createReadonlyMqttConnectPacketWill({
    retain,
    qos,
    properties: standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList(properties),
    topic: createReadonlyMqttPacketTopicFromString(topic),
    payload,
  });
}
