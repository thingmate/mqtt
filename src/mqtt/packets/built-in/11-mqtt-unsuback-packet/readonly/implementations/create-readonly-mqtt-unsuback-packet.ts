import { IReadonlyMqttPacketId } from '../../../../components/mqtt-packet-id/readonly/readonly-mqtt-packet-id.type';
import {
  IGenericMqttPacketUnsubackReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/11-unsuback/mqtt-packet-unsuback-reason.type';
import { IMqttUnsubackPacketType, MQTT_UNSUBACK_PACKET_TYPE } from '../../constants/mqtt-unsuback-packet-type.constant';
import { IReadonlyMqttUnsubackPacket } from '../readonly-mqtt-unsuback-packet.type';
import {
  IReadonlyMqttUnsubackPacketPropertyList,
} from '../traits/get-properties/readonly-mqtt-unsuback-packet.get-properties.function-definition';

export interface IReadonlyMqttUnsubackPacketContext {
  readonly packetId: IReadonlyMqttPacketId;
  readonly properties: IReadonlyMqttUnsubackPacketPropertyList;
  readonly reason: IGenericMqttPacketUnsubackReason;
}

export function createReadonlyMqttUnsubackPacket(
  context: IReadonlyMqttUnsubackPacketContext,
): IReadonlyMqttUnsubackPacket {
  const getType = (): IMqttUnsubackPacketType => {
    return MQTT_UNSUBACK_PACKET_TYPE;
  };

  const getPacketId = (): IReadonlyMqttPacketId => {
    return context.packetId;
  };

  const getProperties = (): IReadonlyMqttUnsubackPacketPropertyList => {
    return context.properties;
  };

  const getReason = (): IGenericMqttPacketUnsubackReason => {
    return context.reason;
  };

  return {
    getType,
    getPacketId,
    getProperties,
    getReason,
  };
}

