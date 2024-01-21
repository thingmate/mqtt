import { u16 } from '@lifaon/number-types';
import {
  IGenericStandardMqttPacketPubrelReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/06-pubrel/standard/standard-mqtt-packet-pubrel-reason.type';

import { IStandardMqttPacket } from '../../../../components/mqtt-packet/standard/standard-mqtt-packet.type';
import { IMqttPubrelPacketType } from '../../constants/mqtt-pubrel-packet-type.constant';
import { IStandardMqttPubrelPacketProperties } from './standard-mqtt-pubrel-packet-properties.type';

export interface IStandardMqttPubrelPacket extends IStandardMqttPacket<IMqttPubrelPacketType> {
  readonly packetId: u16;
  readonly reason: IGenericStandardMqttPacketPubrelReason;
  readonly properties: IStandardMqttPubrelPacketProperties;
}
