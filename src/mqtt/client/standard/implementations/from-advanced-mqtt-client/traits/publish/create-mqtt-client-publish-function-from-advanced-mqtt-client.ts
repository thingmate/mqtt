import { u16 } from '@lifaon/number-types';
import { AsyncTask } from '@lirx/async-task';
import { QOS } from '../../../../../../constants/qos.enum';
import {
  standardMqttPublishPacketToReadonlyMqttPublishPacket,
} from '../../../../../../packets/built-in/03-mqtt-publish-packet/readonly/standard/standard-mqtt-publish-packet-to-readonly-mqtt-publish-packet';
import {
  readonlyMqttPubackPacketToStandardMqttPubackPacket,
} from '../../../../../../packets/built-in/04-mqtt-puback-packet/readonly/standard/readonly-mqtt-puback-packet-to-standard-mqtt-puback-packet';
import {
  readonlyMqttPubrecPacketToStandardMqttPubrecPacket,
} from '../../../../../../packets/built-in/05-mqtt-pubrec-packet/readonly/standard/readonly-mqtt-pubrec-packet-to-standard-mqtt-pubrec-packet';
import {
  readonlyMqttPubcompPacketToStandardMqttPubcompPacket,
} from '../../../../../../packets/built-in/07-mqtt-pubcomp-packet/readonly/standard/readonly-mqtt-pubcomp-packet-to-standard-mqtt-pubcomp-packet';
import {
  createReadonlyMqttPacketPayloadFromStringOrUint8Array,
} from '../../../../../../packets/components/mqtt-packet-payload/readonly/implementations/create-readonly-mqtt-packet-payload-from-string-or-uint8-array';
import { IAdvancedMqttClient } from '../../../../../advanced/advanced-mqtt-client.type';
import {
  IAdvancedMqttClientPublishFunctionResult,
} from '../../../../../advanced/traits/publish/advanced-mqtt-client.publish.function-definition';
import {
  IMqttClientPublishFunction,
  IMqttClientPublishFunctionOptions,
  IMqttClientPublishFunctionResult,
} from '../../../../traits/publish/mqtt-client.publish.function-definition';

export function createMqttClientPublishFunctionFromAdvancedMqttClient(
  advancedMqttClient: IAdvancedMqttClient,
): IMqttClientPublishFunction {
  return (
    {
      topic,
      qos = QOS.AT_MOST_ONCE,
      retain = false,
      packetId,
      duplicate = false,
      properties = {},
      payload,
      abortable,
    }: IMqttClientPublishFunctionOptions,
  ): AsyncTask<IMqttClientPublishFunctionResult> => {
    const _paquetId: u16 | undefined = (packetId === void 0)
      ? (
        (qos === QOS.AT_MOST_ONCE)
          ? void 0
          : advancedMqttClient.getNextPacketId().get()
      )
      : packetId;

    return advancedMqttClient.publish(
      standardMqttPublishPacketToReadonlyMqttPublishPacket({
        duplicate,
        qos,
        retain,
        topic,
        packetId: _paquetId,
        properties,
        payload: createReadonlyMqttPacketPayloadFromStringOrUint8Array(payload),
      }),
      abortable,
    )
      .successful((
        result: IAdvancedMqttClientPublishFunctionResult,
      ): IMqttClientPublishFunctionResult => {
        if (result === null) {
          return null;
        } else if (Array.isArray(result)) {
          return [
            readonlyMqttPubrecPacketToStandardMqttPubrecPacket(result[0]),
            readonlyMqttPubcompPacketToStandardMqttPubcompPacket(result[1]),
          ];
        } else {
          return readonlyMqttPubackPacketToStandardMqttPubackPacket(result);
        }
      });
  };
}
