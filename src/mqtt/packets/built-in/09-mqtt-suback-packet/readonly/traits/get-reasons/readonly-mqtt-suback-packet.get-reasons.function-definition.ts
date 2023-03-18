import {
  IGenericMqttPacketSubackReason,
} from '../../../../../components/mqtt-packet-reason/readonly/implementations/built-in/09-suback/mqtt-packet-suback-reason.type';

export interface IReadonlyMqttSubackPacketGetReasonsFunction {
  (): readonly IGenericMqttPacketSubackReason[];
}
