import { IReadonlyMqttPacketId } from '../../../../components/mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';
import {
  readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/readonly-mqtt-packet-property-list-to-standard-mqtt-packet-property-list';
import { IReadonlyMqttPublishPacket } from '../readonly-mqtt-publish-packet.type';
import { IStandardMqttPublishPacket } from './standard-mqtt-publish-packet.type';

export function readonlyMqttPublishPacketToStandardMqttPublishPacket(
  {
    getType,
    getDuplicate,
    getQoS,
    getRetain,
    getTopic,
    getPacketId,
    getProperties,
    getPayload,
  }: IReadonlyMqttPublishPacket,
): IStandardMqttPublishPacket {
  const packetId: IReadonlyMqttPacketId | undefined = getPacketId();
  return {
    type: getType(),
    duplicate: getDuplicate(),
    qos: getQoS(),
    retain: getRetain(),
    topic: getTopic().toString(),
    packetId: (packetId === void 0)
      ? void 0
      : packetId.get(),
    properties: readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList(getProperties()),
    payload: getPayload(),
  };
}
