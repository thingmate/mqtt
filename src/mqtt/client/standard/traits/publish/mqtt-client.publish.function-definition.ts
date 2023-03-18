import { Abortable, AsyncTask } from '@lirx/async-task';
import {
  IStandardMqttPublishPacket,
} from '../../../../packets/built-in/03-mqtt-publish-packet/readonly/standard/standard-mqtt-publish-packet.type';
import {
  IStandardMqttPubackPacket,
} from '../../../../packets/built-in/04-mqtt-puback-packet/readonly/standard/standard-mqtt-puback-packet.type';
import {
  IStandardMqttPubrecPacket,
} from '../../../../packets/built-in/05-mqtt-pubrec-packet/readonly/standard/standard-mqtt-pubrec-packet.type';
import {
  IStandardMqttPubcompPacket,
} from '../../../../packets/built-in/07-mqtt-pubcomp-packet/readonly/standard/standard-mqtt-pubcomp-packet.type';
import {
  IStringOrUint8Array,
} from '../../../../packets/components/mqtt-packet-payload/readonly/implementations/create-readonly-mqtt-packet-payload-from-string-or-uint8-array';

export interface IMqttClientPublishFunctionOptions extends //
  Pick<IStandardMqttPublishPacket, 'topic'>,
  Partial<Pick<IStandardMqttPublishPacket, 'duplicate' | 'qos' | 'retain' | 'packetId' | 'properties'>>
//
{
  payload: IStringOrUint8Array;
  abortable: Abortable;
}

export type IStandardMqttPubrecAndPubcompPacketPair = [
  pubrecPacket: IStandardMqttPubrecPacket,
  pubcompPacket: IStandardMqttPubcompPacket,
];

export type IMqttClientPublishFunctionResult =
  | null // qos 0
  | IStandardMqttPubackPacket // qos 1
  | IStandardMqttPubrecAndPubcompPacketPair // qos 2

export interface IMqttClientPublishFunction {
  (
    options: IMqttClientPublishFunctionOptions,
  ): AsyncTask<IMqttClientPublishFunctionResult>;
}
