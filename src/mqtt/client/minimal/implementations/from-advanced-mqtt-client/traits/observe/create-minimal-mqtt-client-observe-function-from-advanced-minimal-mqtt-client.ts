import { Abortable, AsyncTask } from '@lirx/async-task';
import { IPushSinkWithBackPressure, IPushSourceWithBackPressure, sharePushPipeWithBackPressure } from '@lirx/stream';
import { noop } from '@lirx/utils';
import {
  createReadonlyStringBufferFromString,
} from '../../../../../../../classes/string-buffer/readonly/implementations/create-readonly-string-buffer-from-string';
import { QOS } from '../../../../../../constants/qos.enum';
import {
  IReadonlyMqttPublishPacket,
} from '../../../../../../packets/built-in/03-mqtt-publish-packet/readonly/readonly-mqtt-publish-packet.type';
import {
  createReadonlyMqttSubscribePacketSubscription,
} from '../../../../../../packets/built-in/08-mqtt-subscribe-packet/components/mqtt-subscribe-packet-subscription/readonly/implementations/create-readonly-mqtt-subscribe-packet-subscription';
import {
  MQTT_SUBSCRIBE_PACKET_SUBSCRIPTION_RETAIN_HANDLING,
} from '../../../../../../packets/built-in/08-mqtt-subscribe-packet/components/mqtt-subscribe-packet-subscription/readonly/traits/get-retain-handling/mqtt-subscribe-packet-subscription-retain-handling.enum';
import {
  createReadonlyMqttSubscribePacket,
} from '../../../../../../packets/built-in/08-mqtt-subscribe-packet/readonly/implementations/create-readonly-mqtt-subscribe-packet';
import {
  createReadonlyMqttUnsubscribePacket,
} from '../../../../../../packets/built-in/10-mqtt-unsubscribe-packet/readonly/implementations/create-readonly-mqtt-unsubscribe-packet';
import {
  createReadonlyMqttPacketIdFromNumber,
} from '../../../../../../packets/components/mqtt-packet-id/readonly/implementations/create-readonly-mqtt-packet-id-from-number';
import {
  IReadonlyMqttPacketPayload,
} from '../../../../../../packets/components/mqtt-packet-payload/readonly/readonly-mqtt-packet-payload.type';
import {
  EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT,
} from '../../../../../../packets/components/mqtt-packet-property-list/readonly/constants/empty-readonly-mqtt-packet-property-list.constant';
import {
  createReadonlyMqttPacketTopicFromString,
} from '../../../../../../packets/components/mqtt-packet-topic/readonly/implementations/create-readonly-mqtt-packet-topic-from-string';
import { IAdvancedMqttClient } from '../../../../../advanced/advanced-mqtt-client.type';
import { IMinimalMqttClientObserveFunction } from '../../../../traits/observe/minimal-mqtt-client.observe.function-definition';

export function createMinimalMqttClientObserveFunctionFromAdvancedMqttClient(
  advancedMqttClient: IAdvancedMqttClient,
): IMinimalMqttClientObserveFunction {
  const sources = new Map<string, IPushSourceWithBackPressure<IReadonlyMqttPacketPayload>>();

  return (
    topic: string,
  ): IPushSourceWithBackPressure<IReadonlyMqttPacketPayload> => {
    let source: IPushSourceWithBackPressure<IReadonlyMqttPacketPayload> | undefined = sources.get(topic);

    if (source === void 0) {
      source = sharePushPipeWithBackPressure((
        sink: IPushSinkWithBackPressure<IReadonlyMqttPacketPayload>,
        abortable: Abortable,
      ): AsyncTask<void> => {
        return AsyncTask.all([
          (abortable: Abortable) => {
            return advancedMqttClient.subscribe(
              createReadonlyMqttSubscribePacket({
                packetId: createReadonlyMqttPacketIdFromNumber(
                  advancedMqttClient.getNextPacketId().get(),
                ),
                subscriptions: [
                  createReadonlyMqttSubscribePacketSubscription({
                    topic: createReadonlyMqttPacketTopicFromString(topic),
                    qos: QOS.AT_MOST_ONCE,
                    noLocal: false,
                    retainAsPublished: false,
                    retainHandling: MQTT_SUBSCRIBE_PACKET_SUBSCRIPTION_RETAIN_HANDLING.SEND_AT_SUBSCRIBE,
                  }),
                ],
                properties: EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT,
              }),
              abortable,
            )
              .successful((_, abortable: Abortable): void => {
                abortable.onAbort((): void => {
                  advancedMqttClient.unsubscribe(
                    createReadonlyMqttUnsubscribePacket({
                      packetId: createReadonlyMqttPacketIdFromNumber(
                        advancedMqttClient.getNextPacketId().get(),
                      ),
                      unsubscriptions: [
                        createReadonlyStringBufferFromString(topic),
                      ],
                      properties: EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT,
                    }),
                    abortable,
                  );
                });
              });
          },
          (abortable: Abortable) => {
            return advancedMqttClient.on(createReadonlyMqttPacketTopicFromString(topic))(
              (value: IReadonlyMqttPublishPacket, abortable: Abortable) => {
                return sink(
                  value.getPayload(),
                  abortable,
                );
              },
              abortable,
            );
          },
        ], abortable)
          .successful(noop);
      });

      sources.set(topic, source);
    }

    return source;
  };
}
