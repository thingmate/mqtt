import { IReadonlyMqttPacketPayload } from '../../../../../../../components/mqtt-packet-payload/readonly/readonly-mqtt-packet-payload.type';

export interface IReadonlyMqttConnectPacketWillGetPayloadFunction {
  (): IReadonlyMqttPacketPayload;
}
