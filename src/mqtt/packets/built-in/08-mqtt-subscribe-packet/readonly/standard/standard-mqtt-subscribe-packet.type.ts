import { u16 } from '@lifaon/number-types';
import { IStandardMqttPacket } from '../../../../components/mqtt-packet/standard/standard-mqtt-packet.type';
import {
  IStandardMqttSubscribePacketSubscription,
} from '../../components/mqtt-subscribe-packet-subscription/readonly/standard/standard-mqtt-subscribe-packet-subscription.type';
import { IMqttSubscribePacketType } from '../../constants/mqtt-subscribe-packet-type.constant';
import { IStandardMqttSubscribePacketProperties } from './standard-mqtt-subscribe-packet-properties.type';

export interface IStandardMqttSubscribePacket extends IStandardMqttPacket<IMqttSubscribePacketType> {
  packetId: u16; // only if qos > 0
  properties: IStandardMqttSubscribePacketProperties;
  subscriptions: readonly IStandardMqttSubscribePacketSubscription[];
}
