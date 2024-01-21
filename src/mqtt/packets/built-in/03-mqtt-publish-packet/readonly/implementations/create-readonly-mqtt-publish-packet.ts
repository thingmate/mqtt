import { QOS } from '../../../../../constants/qos.enum';
import { IReadonlyMqttPacketId } from '../../../../components/mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';
import { IReadonlyMqttPacketPayload } from '../../../../components/mqtt-packet-payload/readonly/readonly-mqtt-packet-payload.type';
import { IReadonlyMqttPacketTopic } from '../../../../components/mqtt-packet-topic/readonly/readonly-mqtt-packet-topic.type';
import { IMqttPublishPacketType, MQTT_PUBLISH_PACKET_TYPE } from '../../constants/mqtt-publish-packet-type.constant';

import { IReadonlyMqttPublishPacket } from '../readonly-mqtt-publish-packet.type';
import {
  IReadonlyMqttPublishPacketPropertyList,
} from '../traits/get-properties/readonly-mqtt-publish-packet.get-properties.function-definition';

export interface IReadonlyMqttPublishPacketContext {
  readonly duplicate: boolean;
  readonly qos: QOS;
  readonly retain: boolean;
  readonly topic: IReadonlyMqttPacketTopic;
  readonly packetId: IReadonlyMqttPacketId | undefined; // only if qos > 0
  readonly properties: IReadonlyMqttPublishPacketPropertyList; // V5
  readonly payload: IReadonlyMqttPacketPayload;
}

export function createReadonlyMqttPublishPacket(
  context: IReadonlyMqttPublishPacketContext,
): IReadonlyMqttPublishPacket {
  const getType = (): IMqttPublishPacketType => {
    return MQTT_PUBLISH_PACKET_TYPE;
  };

  const getDuplicate = (): boolean => {
    return context.duplicate;
  };

  const getQoS = (): QOS => {
    return context.qos;
  };

  const getRetain = (): boolean => {
    return context.retain;
  };

  const getTopic = (): IReadonlyMqttPacketTopic => {
    return context.topic;
  };

  const getPacketId = (): IReadonlyMqttPacketId | undefined => {
    return context.packetId;
  };

  const getProperties = (): IReadonlyMqttPublishPacketPropertyList => {
    return context.properties;
  };

  const getPayload = (): IReadonlyMqttPacketPayload => {
    return context.payload;
  };

  return {
    getType,
    getDuplicate,
    getQoS,
    getRetain,
    getTopic,
    getPacketId,
    getProperties,
    getPayload,
  };
}

