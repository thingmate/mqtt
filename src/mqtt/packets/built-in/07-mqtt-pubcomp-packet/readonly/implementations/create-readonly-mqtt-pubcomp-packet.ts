;
import { IReadonlyMqttPacketId } from '../../../../components/mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';
import {
  IGenericMqttPacketPubcompReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/07-pubcomp/mqtt-packet-pubcomp-reason.type';
import { IMqttPubcompPacketType, MQTT_PUBCOMP_PACKET_TYPE } from '../../constants/mqtt-pubcomp-packet-type.constant';
import { IReadonlyMqttPubcompPacket } from '../readonly-mqtt-pubcomp-packet.type';
import {
  IReadonlyMqttPubcompPacketPropertyList,
} from '../traits/get-properties/readonly-mqtt-pubcomp-packet.get-properties.function-definition';

export interface IReadonlyMqttPubcompPacketContext {
  packetId: IReadonlyMqttPacketId;
  reason: IGenericMqttPacketPubcompReason;
  properties: IReadonlyMqttPubcompPacketPropertyList;
}

export function createReadonlyMqttPubcompPacket(
  context: IReadonlyMqttPubcompPacketContext,
): IReadonlyMqttPubcompPacket {
  const getType = (): IMqttPubcompPacketType => {
    return MQTT_PUBCOMP_PACKET_TYPE;
  };

  const getPacketId = (): IReadonlyMqttPacketId => {
    return context.packetId;
  };

  const getReason = (): IGenericMqttPacketPubcompReason => {
    return context.reason;
  };

  const getProperties = (): IReadonlyMqttPubcompPacketPropertyList => {
    return context.properties;
  };

  return {
    getType,
    getPacketId,
    getReason,
    getProperties,
  };
}

