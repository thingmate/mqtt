import { IReadonlyMqttPacketId } from '../../../../components/mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';
import {
  IGenericMqttPacketPubackReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/04-puback/mqtt-packet-puback-reason.type';
import { IMqttPubackPacketType, MQTT_PUBACK_PACKET_TYPE } from '../../constants/mqtt-puback-packet-type.constant';
import { IReadonlyMqttPubackPacket } from '../readonly-mqtt-puback-packet.type';
import {
  IReadonlyMqttPubackPacketPropertyList,
} from '../traits/get-properties/readonly-mqtt-puback-packet.get-properties.function-definition';

export interface IReadonlyMqttPubackPacketContext {
  packetId: IReadonlyMqttPacketId;
  reason: IGenericMqttPacketPubackReason;
  properties: IReadonlyMqttPubackPacketPropertyList;
}

export function createReadonlyMqttPubackPacket(
  context: IReadonlyMqttPubackPacketContext,
): IReadonlyMqttPubackPacket {
  const getType = (): IMqttPubackPacketType => {
    return MQTT_PUBACK_PACKET_TYPE;
  };

  const getPacketId = (): IReadonlyMqttPacketId => {
    return context.packetId;
  };

  const getReason = (): IGenericMqttPacketPubackReason => {
    return context.reason;
  };

  const getProperties = (): IReadonlyMqttPubackPacketPropertyList => {
    return context.properties;
  };

  return {
    getType,
    getPacketId,
    getReason,
    getProperties,
  };
}

