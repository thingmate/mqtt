import {
  IGenericMqttPacketPubrelReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/06-pubrel/mqtt-packet-pubrel-reason.type';

export interface IReadonlyMqttPubrelPacketGetReasonFunction {
  (): IGenericMqttPacketPubrelReason;
}
