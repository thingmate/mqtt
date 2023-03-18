import { u16 } from '@lifaon/number-types';
import { AsyncTask } from '@lirx/async-task';
import { QOS } from '../../../../../../constants/qos.enum';
import {
  MQTT_SUBSCRIBE_PACKET_SUBSCRIPTION_RETAIN_HANDLING,
} from '../../../../../../packets/built-in/08-mqtt-subscribe-packet/components/mqtt-subscribe-packet-subscription/readonly/traits/get-retain-handling/mqtt-subscribe-packet-subscription-retain-handling.enum';
import {
  standardMqttSubscribePacketToReadonlyMqttSubscribePacket,
} from '../../../../../../packets/built-in/08-mqtt-subscribe-packet/readonly/standard/standard-mqtt-subscribe-packet-to-readonly-mqtt-subscribe-packet';
import {
  readonlyMqttSubackPacketToStandardMqttSubackPacket,
} from '../../../../../../packets/built-in/09-mqtt-suback-packet/readonly/standard/readonly-mqtt-suback-packet-to-standard-mqtt-suback-packet';
import {
  IStandardMqttSubackPacket,
} from '../../../../../../packets/built-in/09-mqtt-suback-packet/readonly/standard/standard-mqtt-suback-packet.type';
import { IAdvancedMqttClient } from '../../../../../advanced/advanced-mqtt-client.type';
import {
  IMqttClientSubscribeFunction,
  IMqttClientSubscribeFunctionOptions,
} from '../../../../traits/subscribe/mqtt-client.subscribe.function-definition';

export function createMqttClientSubscribeFunctionFromAdvancedMqttClient(
  advancedMqttClient: IAdvancedMqttClient,
): IMqttClientSubscribeFunction {
  return (
    {
      topic,
      qos = QOS.AT_MOST_ONCE,
      noLocal = false,
      retainAsPublished = false,
      retainHandling = MQTT_SUBSCRIBE_PACKET_SUBSCRIPTION_RETAIN_HANDLING.SEND_AT_SUBSCRIBE,
      packetId,
      properties = {},
      abortable,
    }: IMqttClientSubscribeFunctionOptions,
  ): AsyncTask<IStandardMqttSubackPacket> => {
    const _paquetId: u16 = (packetId === void 0)
      ? advancedMqttClient.getNextPacketId().get()
      : packetId;

    return advancedMqttClient.subscribe(
      standardMqttSubscribePacketToReadonlyMqttSubscribePacket({
        packetId: _paquetId,
        properties,
        subscriptions: [
          {
            topic,
            qos,
            noLocal,
            retainAsPublished,
            retainHandling,
          },
        ],
      }),
      abortable,
    )
      .successful(readonlyMqttSubackPacketToStandardMqttSubackPacket);
  };
}
