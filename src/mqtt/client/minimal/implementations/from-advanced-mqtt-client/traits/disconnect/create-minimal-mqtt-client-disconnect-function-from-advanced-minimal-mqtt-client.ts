import { Abortable, AbortableController, AsyncTask } from '@lirx/async-task';
import {
  createReadonlyMqttDisconnectPacket,
} from '../../../../../../packets/built-in/14-mqtt-disconnect-packet/readonly/implementations/create-readonly-mqtt-disconnect-packet';
import {
  EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT,
} from '../../../../../../packets/components/mqtt-packet-property-list/readonly/constants/empty-readonly-mqtt-packet-property-list.constant';
import {
  createMqttPacketDisconnectReason,
} from '../../../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/14-disconnect/create-mqtt-packet-disconnect-reason';
import {
  DISCONNECT_REASON_CODE,
} from '../../../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/14-disconnect/disconnect-reason-code.enum';
import { IAdvancedMqttClient } from '../../../../../advanced/advanced-mqtt-client.type';
import { IMinimalMqttClientDisconnectFunction } from '../../../../traits/disconnect/minimal-mqtt-client.disconnect.function-definition';

export function createMinimalMqttClientDisconnectFunctionFromAdvancedMqttClient(
  advancedMqttClient: IAdvancedMqttClient,
  globalAbortableController?: AbortableController,
): IMinimalMqttClientDisconnectFunction {
  return (
    abortable: Abortable,
  ): AsyncTask<void> => {
    globalAbortableController?.abort('Disconnect');
    return advancedMqttClient.disconnect(
      createReadonlyMqttDisconnectPacket({
        reason: createMqttPacketDisconnectReason(DISCONNECT_REASON_CODE.NORMAL_DISCONNECTION),
        properties: EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT,
      }),
      abortable,
    );
  };
}
