import { u16 } from '@lifaon/number-types';
import {
  IGenericStandardMqttPacketPubcompReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/07-pubcomp/standard/standard-mqtt-packet-pubcomp-reason.type';
import { IStandardMqttPacket } from '../../../../components/mqtt-packet/standard/standard-mqtt-packet.type';
import { IMqttPubcompPacketType } from '../../constants/mqtt-pubcomp-packet-type.constant';
import { IStandardMqttPubcompPacketProperties } from './standard-mqtt-pubcomp-packet-properties.type';

export interface IStandardMqttPubcompPacket extends IStandardMqttPacket<IMqttPubcompPacketType> {
  readonly packetId: u16;
  readonly reason: IGenericStandardMqttPacketPubcompReason;
  readonly properties: IStandardMqttPubcompPacketProperties;
}
