import { u16 } from '@lifaon/number-types';
import {
  IGenericStandardMqttPacketPubrecReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/05-pubrec/standard/standard-mqtt-packet-pubrec-reason.type';

import { IStandardMqttPacket } from '../../../../components/mqtt-packet/standard/standard-mqtt-packet.type';
import { IMqttPubrecPacketType } from '../../constants/mqtt-pubrec-packet-type.constant';
import { IStandardMqttPubrecPacketProperties } from './standard-mqtt-pubrec-packet-properties.type';

export interface IStandardMqttPubrecPacket extends IStandardMqttPacket<IMqttPubrecPacketType> {
  packetId: u16;
  reason: IGenericStandardMqttPacketPubrecReason;
  properties: IStandardMqttPubrecPacketProperties;
}
