import { QOS } from '../../../../../../../../constants/qos.enum';

export interface IReadonlyMqttConnectPacketWillGetQoSFunction {
  (): QOS;
}
