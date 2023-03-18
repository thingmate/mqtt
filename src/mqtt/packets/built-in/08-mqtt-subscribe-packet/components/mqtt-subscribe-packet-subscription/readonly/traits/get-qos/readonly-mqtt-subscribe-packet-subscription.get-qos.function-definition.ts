import { QOS } from '../../../../../../../../constants/qos.enum';

export interface IReadonlyMqttSubscribePacketSubscriptionGetQoSFunction {
  (): QOS;
}
