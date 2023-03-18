import {
  IGenericMqttPacketUnsubackReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/11-unsuback/mqtt-packet-unsuback-reason.type';

export interface IReadonlyMqttUnsubackPacketGetReasonFunction {
  (): IGenericMqttPacketUnsubackReason;
}
