import {
  readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList,
} from '../../../../../../components/mqtt-packet-property-list/readonly/standard/readonly-mqtt-packet-property-list-to-standard-mqtt-packet-property-list';
import { IReadonlyMqttConnectPacketWill } from '../readonly-mqtt-connect-packet-will.type';
import { IStandardMqttConnectPacketWill } from './standard-mqtt-connect-packet-will.type';

export function readonlyMqttConnectPacketWillToStandardMqttConnectPacketWill(
  {
    getRetain,
    getQoS,
    getProperties,
    getTopic,
    getPayload,
  }: IReadonlyMqttConnectPacketWill,
): IStandardMqttConnectPacketWill {
  return {
    retain: getRetain(),
    qos: getQoS(),
    properties: readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList(getProperties()),
    topic: getTopic().toString(),
    payload: getPayload(),
  };
}
