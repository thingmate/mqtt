import { QOS } from '../../../../../../../constants/qos.enum';
import { IReadonlyMqttPacketPayload } from '../../../../../../components/mqtt-packet-payload/readonly/readonly-mqtt-packet-payload.type';
import { IStandardMqttConnectPacketWillProperties } from './standard-mqtt-connect-packet-will-properties.type';

export interface IStandardMqttConnectPacketWill {
  retain: boolean;
  qos: QOS;
  properties: IStandardMqttConnectPacketWillProperties;
  topic: string;
  payload: IReadonlyMqttPacketPayload;
}
