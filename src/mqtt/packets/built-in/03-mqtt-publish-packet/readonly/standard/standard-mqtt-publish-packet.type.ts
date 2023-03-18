import { u16 } from '@lifaon/number-types';
import { QOS } from '../../../../../constants/qos.enum';
import { IReadonlyMqttPacketPayload } from '../../../../components/mqtt-packet-payload/readonly/readonly-mqtt-packet-payload.type';
import { IStandardMqttPacket } from '../../../../components/mqtt-packet/standard/standard-mqtt-packet.type';
import { IMqttPublishPacketType } from '../../constants/mqtt-publish-packet-type.constant';
import { IStandardMqttPublishPacketProperties } from './standard-mqtt-publish-packet-properties.type';

export interface IStandardMqttPublishPacket extends IStandardMqttPacket<IMqttPublishPacketType> {
  duplicate: boolean;
  qos: QOS;
  retain: boolean;
  topic: string;
  packetId: u16 | undefined; // only if qos > 0
  properties: IStandardMqttPublishPacketProperties;
  payload: IReadonlyMqttPacketPayload;
}
