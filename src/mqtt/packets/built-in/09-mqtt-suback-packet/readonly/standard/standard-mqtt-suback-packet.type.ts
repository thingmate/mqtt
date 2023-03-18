import { u16 } from '@lifaon/number-types';
import {
  IGenericStandardMqttPacketSubackReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/09-suback/standard/standard-mqtt-packet-suback-reason.type';
import { IStandardMqttPacket } from '../../../../components/mqtt-packet/standard/standard-mqtt-packet.type';
import { IMqttSubackPacketType } from '../../constants/mqtt-suback-packet-type.constant';
import { IStandardMqttSubackPacketProperties } from './standard-mqtt-suback-packet-properties.type';

export interface IStandardMqttSubackPacket extends IStandardMqttPacket<IMqttSubackPacketType> {
  packetId: u16;
  reasons: readonly IGenericStandardMqttPacketSubackReason[];
  properties: IStandardMqttSubackPacketProperties;
}
