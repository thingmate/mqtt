import { IReadonlyStringBuffer } from '../../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import { IReadonlyMqttPacketId } from '../../../../components/mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';
import { IMqttUnsubscribePacketType, MQTT_UNSUBSCRIBE_PACKET_TYPE } from '../../constants/mqtt-unsubscribe-packet-type.constant';
import { IReadonlyMqttUnsubscribePacket } from '../readonly-mqtt-unsubscribe-packet.type';
import {
  IReadonlyMqttUnsubscribePacketPropertyList,
} from '../traits/get-properties/readonly-mqtt-unsubscribe-packet.get-properties.function-definition';

export interface IReadonlyMqttUnsubscribePacketContext {
  readonly packetId: IReadonlyMqttPacketId;
  readonly properties: IReadonlyMqttUnsubscribePacketPropertyList;
  readonly unsubscriptions: readonly IReadonlyStringBuffer[];
}

export function createReadonlyMqttUnsubscribePacket(
  context: IReadonlyMqttUnsubscribePacketContext,
): IReadonlyMqttUnsubscribePacket {
  const getType = (): IMqttUnsubscribePacketType => {
    return MQTT_UNSUBSCRIBE_PACKET_TYPE;
  };

  const getPacketId = (): IReadonlyMqttPacketId => {
    return context.packetId;
  };

  const getProperties = (): IReadonlyMqttUnsubscribePacketPropertyList => {
    return context.properties;
  };

  const getUnsubscriptions = (): readonly IReadonlyStringBuffer[] => {
    return context.unsubscriptions;
  };

  return {
    getType,
    getPacketId,
    getProperties,
    getUnsubscriptions,
  };
}

