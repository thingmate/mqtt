import {
  IGenericMqttPacketConnackReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/02-connack/mqtt-packet-connack-reason.type';
import { IMqttConnackPacketType, MQTT_CONNACK_PACKET_TYPE } from '../../constants/mqtt-connack-packet-type.constant';
import { IReadonlyMqttConnackPacket } from '../readonly-mqtt-connack-packet.type';
import {
  IReadonlyMqttConnackPacketPropertyList,
} from '../traits/get-properties/readonly-mqtt-connack-packet.get-properties.function-definition';

export interface IReadonlyMqttConnackPacketContext {
  readonly sessionPresent: boolean;
  readonly reason: IGenericMqttPacketConnackReason;
  readonly properties: IReadonlyMqttConnackPacketPropertyList;
}

export function createReadonlyMqttConnackPacket(
  context: IReadonlyMqttConnackPacketContext,
): IReadonlyMqttConnackPacket {
  const getType = (): IMqttConnackPacketType => {
    return MQTT_CONNACK_PACKET_TYPE;
  };

  const getSessionPresent = (): boolean => {
    return context.sessionPresent;
  };

  const getReason = (): IGenericMqttPacketConnackReason => {
    return context.reason;
  };

  const getProperties = (): IReadonlyMqttConnackPacketPropertyList => {
    return context.properties;
  };

  return {
    getType,
    getSessionPresent,
    getReason,
    getProperties,
  };
}

