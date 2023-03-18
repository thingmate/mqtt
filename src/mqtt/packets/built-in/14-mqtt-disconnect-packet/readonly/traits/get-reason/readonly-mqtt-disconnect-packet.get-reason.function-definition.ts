import {
  IGenericMqttPacketDisconnectReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/14-disconnect/mqtt-packet-disconnect-reason.type';

export interface IReadonlyMqttDisconnectPacketGetReasonFunction {
  (): IGenericMqttPacketDisconnectReason;
}
