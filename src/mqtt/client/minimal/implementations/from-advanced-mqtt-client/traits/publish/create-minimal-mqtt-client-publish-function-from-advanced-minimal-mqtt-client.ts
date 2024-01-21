import { Abortable, AsyncTask } from '@lirx/async-task';
import { noop } from '@lirx/utils';
import { QOS } from '../../../../../../constants/qos.enum';
import {
  createReadonlyMqttPublishPacket,
} from '../../../../../../packets/built-in/03-mqtt-publish-packet/readonly/implementations/create-readonly-mqtt-publish-packet';
import {
  createReadonlyMqttPacketPayloadFromStringOrUint8Array,
  IStringOrUint8Array,
} from '../../../../../../packets/components/mqtt-packet-payload/readonly/implementations/create-readonly-mqtt-packet-payload-from-string-or-uint8-array';
import {
  EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT,
} from '../../../../../../packets/components/mqtt-packet-property-list/readonly/constants/empty-readonly-mqtt-packet-property-list.constant';
import {
  createReadonlyMqttPacketTopicFromString,
} from '../../../../../../packets/components/mqtt-packet-topic/readonly/implementations/create-readonly-mqtt-packet-topic-from-string';
import { IAdvancedMqttClient } from '../../../../../advanced/advanced-mqtt-client.type';
import { IMinimalMqttClientPublishFunction } from '../../../../traits/publish/minimal-mqtt-client.publish.function-definition';

export function createMinimalMqttClientPublishFunctionFromAdvancedMqttClient(
  advancedMqttClient: IAdvancedMqttClient,
): IMinimalMqttClientPublishFunction {
  return (
    topic: string,
    payload: IStringOrUint8Array,
    abortable: Abortable,
  ): AsyncTask<void> => {
    return advancedMqttClient.publish(
      createReadonlyMqttPublishPacket({
        duplicate: false,
        qos: QOS.AT_MOST_ONCE,
        retain: false,
        topic: createReadonlyMqttPacketTopicFromString(topic),
        packetId: void 0,
        properties: EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT,
        payload: createReadonlyMqttPacketPayloadFromStringOrUint8Array(payload),
      }),
      abortable,
    )
      .successful(noop);
  };
}
