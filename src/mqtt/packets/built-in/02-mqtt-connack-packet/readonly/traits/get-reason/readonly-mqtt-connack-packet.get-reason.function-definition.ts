import {
  IGenericMqttPacketConnackReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/02-connack/mqtt-packet-connack-reason.type';

export interface IReadonlyMqttConnackPacketGetReasonFunction {
  (): IGenericMqttPacketConnackReason;
}
