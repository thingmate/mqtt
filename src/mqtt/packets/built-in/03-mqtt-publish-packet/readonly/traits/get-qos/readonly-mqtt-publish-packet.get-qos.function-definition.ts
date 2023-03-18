import { QOS } from '../../../../../../constants/qos.enum';

export interface IReadonlyMqttPublishPacketGetQoSFunction {
  (): QOS;
}
