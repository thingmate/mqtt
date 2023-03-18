import {
  IGenericMqttPacketAuthReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/15-auth/mqtt-packet-auth-reason.type';

export interface IReadonlyMqttAuthPacketGetReasonFunction {
  (): IGenericMqttPacketAuthReason;
}
