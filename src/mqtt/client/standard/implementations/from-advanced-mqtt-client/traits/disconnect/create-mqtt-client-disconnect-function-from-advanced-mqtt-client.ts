import { AsyncTask } from '@lirx/async-task';
import {
  standardMqttDisconnectPacketToReadonlyMqttDisconnectPacket,
} from '../../../../../../packets/built-in/14-mqtt-disconnect-packet/readonly/standard/standard-mqtt-disconnect-packet-to-readonly-mqtt-disconnect-packet';
import {
  DISCONNECT_REASON_CODE,
} from '../../../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/14-disconnect/disconnect-reason-code.enum';

import { IAdvancedMqttClient } from '../../../../../advanced/advanced-mqtt-client.type';
import {
  IMqttClientDisconnectFunction,
  IMqttClientDisconnectFunctionOptions,
} from '../../../../traits/disconnect/mqtt-client.disconnect.function-definition';

export function createMqttClientDisconnectFunctionFromAdvancedMqttClient(
  advancedMqttClient: IAdvancedMqttClient,
): IMqttClientDisconnectFunction {
  return (
    {
      reason = { code: DISCONNECT_REASON_CODE.NORMAL_DISCONNECTION, message: 'Normal disconnection' },
      properties = {},
      abortable,
    }: IMqttClientDisconnectFunctionOptions,
  ): AsyncTask<void> => {
    return advancedMqttClient.disconnect(
      standardMqttDisconnectPacketToReadonlyMqttDisconnectPacket({
        reason,
        properties,
      }),
      abortable,
    );
  };
}
