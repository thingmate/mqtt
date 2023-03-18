import {
  IGenericMqttPacketPubackReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/04-puback/mqtt-packet-puback-reason.type';

export interface IReadonlyMqttPubackPacketGetReasonFunction {
  (): IGenericMqttPacketPubackReason;
}
