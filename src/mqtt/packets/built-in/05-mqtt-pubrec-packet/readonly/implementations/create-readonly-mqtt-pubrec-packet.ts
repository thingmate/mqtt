import { IReadonlyMqttPacketId } from '../../../../components/mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';
import {
  IGenericMqttPacketPubrecReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/05-pubrec/mqtt-packet-pubrec-reason.type';
import { IMqttPubrecPacketType, MQTT_PUBREC_PACKET_TYPE } from '../../constants/mqtt-pubrec-packet-type.constant';
import { IReadonlyMqttPubrecPacket } from '../readonly-mqtt-pubrec-packet.type';
import {
  IReadonlyMqttPubrecPacketPropertyList,
} from '../traits/get-properties/readonly-mqtt-pubrec-packet.get-properties.function-definition';

export interface ICreateReadonlyMqttPubrecPacketOptions {
  readonly packetId: IReadonlyMqttPacketId;
  readonly reason: IGenericMqttPacketPubrecReason;
  readonly properties: IReadonlyMqttPubrecPacketPropertyList;
}

export function createReadonlyMqttPubrecPacket(
  context: ICreateReadonlyMqttPubrecPacketOptions,
): IReadonlyMqttPubrecPacket {
  const getType = (): IMqttPubrecPacketType => {
    return MQTT_PUBREC_PACKET_TYPE;
  };

  const getPacketId = (): IReadonlyMqttPacketId => {
    return context.packetId;
  };

  const getReason = (): IGenericMqttPacketPubrecReason => {
    return context.reason;
  };

  const getProperties = (): IReadonlyMqttPubrecPacketPropertyList => {
    return context.properties;
  };

  return {
    getType,
    getPacketId,
    getReason,
    getProperties,
  };
}

