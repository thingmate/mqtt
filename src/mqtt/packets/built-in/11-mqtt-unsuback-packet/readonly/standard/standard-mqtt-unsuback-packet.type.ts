import { u16 } from '@lifaon/number-types';
import {
  IGenericStandardMqttPacketUnsubackReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/11-unsuback/standard/standard-mqtt-packet-unsuback-reason.type';
import { IStandardMqttPacket } from '../../../../components/mqtt-packet/standard/standard-mqtt-packet.type';
import { IMqttUnsubackPacketType } from '../../constants/mqtt-unsuback-packet-type.constant';
import { IStandardMqttUnsubackPacketProperties } from './standard-mqtt-unsuback-packet-properties.type';

export interface IStandardMqttUnsubackPacket extends IStandardMqttPacket<IMqttUnsubackPacketType> {
  packetId: u16;
  reason: IGenericStandardMqttPacketUnsubackReason;
  properties: IStandardMqttUnsubackPacketProperties;
}
