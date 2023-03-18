import {
  IGenericMqttPacketAuthReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/15-auth/mqtt-packet-auth-reason.type';
import { IMqttAuthPacketType, MQTT_AUTH_PACKET_TYPE } from '../../constants/mqtt-auth-packet-type.constant';
import { IReadonlyMqttAuthPacket } from '../readonly-mqtt-auth-packet.type';
import { IReadonlyMqttAuthPacketPropertyList } from '../traits/get-properties/readonly-mqtt-auth-packet.get-properties.function-definition';

export interface IReadonlyMqttAuthPacketContext {
  reason: IGenericMqttPacketAuthReason;
  properties: IReadonlyMqttAuthPacketPropertyList;
}

export function createReadonlyMqttAuthPacket(
  context: IReadonlyMqttAuthPacketContext,
): IReadonlyMqttAuthPacket {
  const getType = (): IMqttAuthPacketType => {
    return MQTT_AUTH_PACKET_TYPE;
  };

  const getReason = (): IGenericMqttPacketAuthReason => {
    return context.reason;
  };

  const getProperties = (): IReadonlyMqttAuthPacketPropertyList => {
    return context.properties;
  };

  return {
    getType,
    getReason,
    getProperties,
  };
}

