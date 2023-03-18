import { Abortable, AsyncTask } from '@lirx/async-task';
import { IReadonlyMqttPublishPacket } from '../../../../packets/built-in/03-mqtt-publish-packet/readonly/readonly-mqtt-publish-packet.type';
import { IReadonlyMqttPubackPacket } from '../../../../packets/built-in/04-mqtt-puback-packet/readonly/readonly-mqtt-puback-packet.type';
import { IReadonlyMqttPubrecPacket } from '../../../../packets/built-in/05-mqtt-pubrec-packet/readonly/readonly-mqtt-pubrec-packet.type';
import { IReadonlyMqttPubcompPacket } from '../../../../packets/built-in/07-mqtt-pubcomp-packet/readonly/readonly-mqtt-pubcomp-packet.type';

export type IMqttPubrecAndPubcompPacketPair = [
  pubrecPacket: IReadonlyMqttPubrecPacket,
  pubcompPacket: IReadonlyMqttPubcompPacket,
];

export type IAdvancedMqttClientPublishFunctionResult =
  | null // qos 0
  | IReadonlyMqttPubackPacket // qos 1
  | IMqttPubrecAndPubcompPacketPair // qos 2
  ;

export interface IAdvancedMqttClientPublishFunction {
  (
    publishPacket: IReadonlyMqttPublishPacket,
    abortable: Abortable,
  ): AsyncTask<IAdvancedMqttClientPublishFunctionResult>;
}
