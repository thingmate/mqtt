import {
  IGenericMqttPacketPubcompReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/07-pubcomp/mqtt-packet-pubcomp-reason.type';

export interface IReadonlyMqttPubcompPacketGetReasonFunction {
  (): IGenericMqttPacketPubcompReason;
}
