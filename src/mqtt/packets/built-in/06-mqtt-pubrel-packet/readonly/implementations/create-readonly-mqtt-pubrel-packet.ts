import { IReadonlyMqttPacketId } from '../../../../components/mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';
import {
  IGenericMqttPacketPubrelReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/06-pubrel/mqtt-packet-pubrel-reason.type';
import { IMqttPubrelPacketType, MQTT_PUBREL_PACKET_TYPE } from '../../constants/mqtt-pubrel-packet-type.constant';
import { IReadonlyMqttPubrelPacket } from '../readonly-mqtt-pubrel-packet.type';
import {
  IReadonlyMqttPubrelPacketPropertyList,
} from '../traits/get-properties/readonly-mqtt-pubrel-packet.get-properties.function-definition';

export interface IReadonlyMqttPubrelPacketContext {
  readonly packetId: IReadonlyMqttPacketId;
  readonly reason: IGenericMqttPacketPubrelReason;
  readonly properties: IReadonlyMqttPubrelPacketPropertyList;
}

export function createReadonlyMqttPubrelPacket(
  context: IReadonlyMqttPubrelPacketContext,
): IReadonlyMqttPubrelPacket {
  const getType = (): IMqttPubrelPacketType => {
    return MQTT_PUBREL_PACKET_TYPE;
  };

  const getPacketId = (): IReadonlyMqttPacketId => {
    return context.packetId;
  };

  const getReason = (): IGenericMqttPacketPubrelReason => {
    return context.reason;
  };

  const getProperties = (): IReadonlyMqttPubrelPacketPropertyList => {
    return context.properties;
  };

  return {
    getType,
    getPacketId,
    getReason,
    getProperties,
  };
}

