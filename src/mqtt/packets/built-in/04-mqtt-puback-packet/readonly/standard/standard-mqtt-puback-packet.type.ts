import { u16 } from '@lifaon/number-types';
import {
  IGenericStandardMqttPacketPubackReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/04-puback/standard/standard-mqtt-packet-puback-reason.type';
import { IStandardMqttPacket } from '../../../../components/mqtt-packet/standard/standard-mqtt-packet.type';
import { IMqttPubackPacketType } from '../../constants/mqtt-puback-packet-type.constant';
import { IStandardMqttPubackPacketProperties } from './standard-mqtt-puback-packet-properties.type';

export interface IStandardMqttPubackPacket extends IStandardMqttPacket<IMqttPubackPacketType> {
  packetId: u16;
  reason: IGenericStandardMqttPacketPubackReason;
  properties: IStandardMqttPubackPacketProperties;
}
