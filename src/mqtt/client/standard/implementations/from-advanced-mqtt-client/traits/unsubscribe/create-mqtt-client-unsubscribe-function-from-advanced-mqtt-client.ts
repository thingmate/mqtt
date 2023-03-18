import { u16 } from '@lifaon/number-types';
import { AsyncTask } from '@lirx/async-task';
import {
  standardMqttUnsubscribePacketToReadonlyMqttUnsubscribePacket,
} from '../../../../../../packets/built-in/10-mqtt-unsubscribe-packet/readonly/standard/standard-mqtt-unsubscribe-packet-to-readonly-mqtt-unsubscribe-packet';
import {
  readonlyMqttUnsubackPacketToStandardMqttUnsubackPacket,
} from '../../../../../../packets/built-in/11-mqtt-unsuback-packet/readonly/standard/readonly-mqtt-unsuback-packet-to-standard-mqtt-unsuback-packet';
import {
  IStandardMqttUnsubackPacket,
} from '../../../../../../packets/built-in/11-mqtt-unsuback-packet/readonly/standard/standard-mqtt-unsuback-packet.type';
import { IAdvancedMqttClient } from '../../../../../advanced/advanced-mqtt-client.type';
import {
  IMqttClientUnsubscribeFunction,
  IMqttClientUnsubscribeFunctionOptions,
} from '../../../../traits/unsubscribe/mqtt-client.unsubscribe.function-definition';

export function createMqttClientUnsubscribeFunctionFromAdvancedMqttClient(
  advancedMqttClient: IAdvancedMqttClient,
): IMqttClientUnsubscribeFunction {
  return (
    {
      packetId,
      properties = {},
      topic,
      abortable,
    }: IMqttClientUnsubscribeFunctionOptions,
  ): AsyncTask<IStandardMqttUnsubackPacket> => {
    const _paquetId: u16 = (packetId === void 0)
      ? advancedMqttClient.getNextPacketId().get()
      : packetId;

    return advancedMqttClient.unsubscribe(
      standardMqttUnsubscribePacketToReadonlyMqttUnsubscribePacket({
        packetId: _paquetId,
        properties,
        unsubscriptions: [
          topic,
        ],
      }),
      abortable,
    )
      .successful(readonlyMqttUnsubackPacketToStandardMqttUnsubackPacket);
  };
}
