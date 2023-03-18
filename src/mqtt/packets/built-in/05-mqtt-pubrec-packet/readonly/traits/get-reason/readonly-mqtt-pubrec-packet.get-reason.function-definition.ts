import {
  IGenericMqttPacketPubrecReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/05-pubrec/mqtt-packet-pubrec-reason.type';

export interface IReadonlyMqttPubrecPacketGetReasonFunction {
  (): IGenericMqttPacketPubrecReason;
}
