import { u16 } from '@lifaon/number-types';
import { IStandardMqttPacket } from '../../../../components/mqtt-packet/standard/standard-mqtt-packet.type';
import { IMqttUnsubscribePacketType } from '../../constants/mqtt-unsubscribe-packet-type.constant';
import { IStandardMqttUnsubscribePacketProperties } from './standard-mqtt-unsubscribe-packet-properties.type';

export interface IStandardMqttUnsubscribePacket extends IStandardMqttPacket<IMqttUnsubscribePacketType> {
  packetId: u16;
  properties: IStandardMqttUnsubscribePacketProperties;
  unsubscriptions: readonly string[];
}
