import {
  createReadonlyMqttPacketIdFromNumber,
} from '../../../../components/mqtt-packet-id/readonly/implementations/create-readonly-mqtt-packet-id-from-number';
import {
  standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/standard-mqtt-packet-property-list-to-readonly-mqtt-packet-property-list';
import {
  createReadonlyMqttPacketTopicFromString,
} from '../../../../components/mqtt-packet-topic/readonly/implementations/create-readonly-mqtt-packet-topic-from-string';
import { createReadonlyMqttPublishPacket } from '../implementations/create-readonly-mqtt-publish-packet';
import { IReadonlyMqttPublishPacket } from '../readonly-mqtt-publish-packet.type';
import { IStandardMqttPublishPacket } from './standard-mqtt-publish-packet.type';

export function standardMqttPublishPacketToReadonlyMqttPublishPacket(
  {
    duplicate,
    qos,
    retain,
    topic,
    packetId,
    properties,
    payload,
  }: Omit<IStandardMqttPublishPacket, 'type'>,
): IReadonlyMqttPublishPacket {
  return createReadonlyMqttPublishPacket({
    duplicate,
    qos,
    retain,
    topic: createReadonlyMqttPacketTopicFromString(topic),
    packetId: (packetId === void 0)
      ? void 0
      : createReadonlyMqttPacketIdFromNumber(packetId),
    properties: standardMqttPacketPropertyListToReadonlyMqttPacketPropertyList(properties),
    payload,
  });
}
