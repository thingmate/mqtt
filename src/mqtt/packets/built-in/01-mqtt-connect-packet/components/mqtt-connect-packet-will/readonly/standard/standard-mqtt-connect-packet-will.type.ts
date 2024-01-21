import { QOS } from '../../../../../../../constants/qos.enum';
import { IReadonlyMqttPacketPayload } from '../../../../../../components/mqtt-packet-payload/readonly/readonly-mqtt-packet-payload.type';
import { IStandardMqttConnectPacketWillProperties } from './standard-mqtt-connect-packet-will-properties.type';

export interface IStandardMqttConnectPacketWill {
  readonly retain: boolean;
  readonly qos: QOS;
  readonly properties: IStandardMqttConnectPacketWillProperties;
  readonly topic: string;
  readonly payload: IReadonlyMqttPacketPayload;
}
