import {
  IGenericStandardMqttPacketAuthReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/15-auth/standard/standard-mqtt-packet-auth-reason.type';
import { IStandardMqttPacket } from '../../../../components/mqtt-packet/standard/standard-mqtt-packet.type';
import { IMqttAuthPacketType } from '../../constants/mqtt-auth-packet-type.constant';
import { IStandardMqttAuthPacketProperties } from './standard-mqtt-auth-packet-properties.type';

export interface IStandardMqttAuthPacket extends IStandardMqttPacket<IMqttAuthPacketType> {
  readonly reason: IGenericStandardMqttPacketAuthReason;
  readonly properties: IStandardMqttAuthPacketProperties;
}
