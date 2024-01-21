import {
  IGenericMqttPacketDisconnectReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/14-disconnect/mqtt-packet-disconnect-reason.type';
import { IMqttDisconnectPacketType, MQTT_DISCONNECT_PACKET_TYPE } from '../../constants/mqtt-disconnect-packet-type.constant';
import { IReadonlyMqttDisconnectPacket } from '../readonly-mqtt-disconnect-packet.type';
import {
  IReadonlyMqttDisconnectPacketPropertyList,
} from '../traits/get-properties/readonly-mqtt-disconnect-packet.get-properties.function-definition';

export interface IReadonlyMqttDisconnectPacketContext {
  readonly reason: IGenericMqttPacketDisconnectReason;
  readonly properties: IReadonlyMqttDisconnectPacketPropertyList;
}

export function createReadonlyMqttDisconnectPacket(
  context: IReadonlyMqttDisconnectPacketContext,
): IReadonlyMqttDisconnectPacket {
  const getType = (): IMqttDisconnectPacketType => {
    return MQTT_DISCONNECT_PACKET_TYPE;
  };

  const getReason = (): IGenericMqttPacketDisconnectReason => {
    return context.reason;
  };

  const getProperties = (): IReadonlyMqttDisconnectPacketPropertyList => {
    return context.properties;
  };

  return {
    getType,
    getReason,
    getProperties,
  };
}

