import {
  IGenericStandardMqttPacketConnackReason,
} from '../../../../components/mqtt-packet-reason/readonly/implementations/built-in/02-connack/standard/standard-mqtt-packet-connack-reason.type';
import { IStandardMqttPacket } from '../../../../components/mqtt-packet/standard/standard-mqtt-packet.type';
import { IMqttConnackPacketType } from '../../constants/mqtt-connack-packet-type.constant';
import { IStandardMqttConnackPacketProperties } from './standard-mqtt-connack-packet-properties.type';

export interface IStandardMqttConnackPacket extends IStandardMqttPacket<IMqttConnackPacketType> {
  readonly sessionPresent: boolean;
  readonly reason: IGenericStandardMqttPacketConnackReason;
  readonly properties: IStandardMqttConnackPacketProperties;
}
