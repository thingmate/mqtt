import { IReadonlyMqttPacketPayload } from '../../../../../components/mqtt-packet-payload/readonly/readonly-mqtt-packet-payload.type';

export interface IReadonlyMqttPublishPacketGetPayloadFunction {
  (): IReadonlyMqttPacketPayload;
}
