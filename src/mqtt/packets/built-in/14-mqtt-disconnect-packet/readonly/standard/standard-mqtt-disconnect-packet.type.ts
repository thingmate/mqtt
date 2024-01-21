import {
  IGenericStandardMqttPacketDisconnectReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/14-disconnect/standard/standard-mqtt-packet-disconnect-reason.type';
import { IStandardMqttPacket } from '../../../../components/mqtt-packet/standard/standard-mqtt-packet.type';
import { IMqttDisconnectPacketType } from '../../constants/mqtt-disconnect-packet-type.constant';
import { IStandardMqttDisconnectPacketProperties } from './standard-mqtt-disconnect-packet-properties.type';

export interface IStandardMqttDisconnectPacket extends IStandardMqttPacket<IMqttDisconnectPacketType> {
  readonly reason: IGenericStandardMqttPacketDisconnectReason;
  readonly properties: IStandardMqttDisconnectPacketProperties;
}
