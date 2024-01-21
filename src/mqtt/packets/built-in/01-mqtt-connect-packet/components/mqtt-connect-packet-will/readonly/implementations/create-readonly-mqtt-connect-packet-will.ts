import { QOS } from '../../../../../../../constants/qos.enum';
import { IReadonlyMqttPacketPayload } from '../../../../../../components/mqtt-packet-payload/readonly/readonly-mqtt-packet-payload.type';
import { IReadonlyMqttPacketTopic } from '../../../../../../components/mqtt-packet-topic/readonly/readonly-mqtt-packet-topic.type';
import { IReadonlyMqttConnectPacketWill } from '../readonly-mqtt-connect-packet-will.type';
import {
  IReadonlyMqttConnectPacketWillPropertyList,
} from '../traits/get-properties/readonly-mqtt-connect-packet-will.get-properties.function-definition';

export interface IReadonlyMqttConnectPacketWillContext {
  readonly retain: boolean;
  readonly qos: QOS;
  readonly properties: IReadonlyMqttConnectPacketWillPropertyList;
  readonly topic: IReadonlyMqttPacketTopic;
  readonly payload: IReadonlyMqttPacketPayload;
}

export function createReadonlyMqttConnectPacketWill(
  context: IReadonlyMqttConnectPacketWillContext,
): IReadonlyMqttConnectPacketWill {
  const getRetain = (): boolean => {
    return context.retain;
  };

  const getQoS = (): QOS => {
    return context.qos;
  };

  const getProperties = (): IReadonlyMqttConnectPacketWillPropertyList => {
    return context.properties;
  };

  const getTopic = (): IReadonlyMqttPacketTopic => {
    return context.topic;
  };

  const getPayload = (): IReadonlyMqttPacketPayload => {
    return context.payload;
  };

  return {
    getRetain,
    getQoS,
    getProperties,
    getTopic,
    getPayload,
  };
}

