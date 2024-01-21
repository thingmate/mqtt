import { IReadonlyMqttPacketId } from '../../../../components/mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';
import {
  IGenericMqttPacketSubackReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/09-suback/mqtt-packet-suback-reason.type';
import { IMqttSubackPacketType, MQTT_SUBACK_PACKET_TYPE } from '../../constants/mqtt-suback-packet-type.constant';
import { IReadonlyMqttSubackPacket } from '../readonly-mqtt-suback-packet.type';
import {
  IReadonlyMqttSubackPacketPropertyList,
} from '../traits/get-properties/readonly-mqtt-suback-packet.get-properties.function-definition';

export interface IReadonlyMqttSubackPacketContext {
  readonly packetId: IReadonlyMqttPacketId;
  readonly properties: IReadonlyMqttSubackPacketPropertyList;
  readonly reasons: readonly IGenericMqttPacketSubackReason[];
}

export function createReadonlyMqttSubackPacket(
  context: IReadonlyMqttSubackPacketContext,
): IReadonlyMqttSubackPacket {
  const getType = (): IMqttSubackPacketType => {
    return MQTT_SUBACK_PACKET_TYPE;
  };

  const getPacketId = (): IReadonlyMqttPacketId => {
    return context.packetId;
  };

  const getProperties = (): IReadonlyMqttSubackPacketPropertyList => {
    return context.properties;
  };

  const getReasons = (): readonly IGenericMqttPacketSubackReason[] => {
    return context.reasons;
  };

  return {
    getType,
    getPacketId,
    getProperties,
    getReasons,
  };
}

