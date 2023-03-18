import { Abortable, AsyncTask } from '@lirx/async-task';
import { IPushSinkWithBackPressure, IPushSourceWithBackPressure } from '@lirx/stream';
import { isMqttPubackPacket } from '../../../../../packets/built-in/04-mqtt-puback-packet/constants/is-mqtt-puback-packet';
import { isMqttPubrecPacket } from '../../../../../packets/built-in/05-mqtt-pubrec-packet/constants/is-mqtt-pubrec-packet';
import {
  createReadonlyMqttPubrelPacket,
} from '../../../../../packets/built-in/06-mqtt-pubrel-packet/readonly/implementations/create-readonly-mqtt-pubrel-packet';
import { isMqttPubcompPacket } from '../../../../../packets/built-in/07-mqtt-pubcomp-packet/constants/is-mqtt-pubcomp-packet';
import { isMqttSubackPacket } from '../../../../../packets/built-in/09-mqtt-suback-packet/constants/is-mqtt-suback-packet';
import { IMqttPacketIdManager } from '../../../../../packets/components/mqtt-packet-id-manager/mqtt-packet-id-manager.type';
import {
  EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT,
} from '../../../../../packets/components/mqtt-packet-property-list/readonly/constants/empty-readonly-mqtt-packet-property-list.constant';
import {
  createMqttPacketPubrelReason,
} from '../../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/06-pubrel/create-mqtt-packet-pubrel-reason';
import {
  PUBREL_REASON_CODE,
} from '../../../../../packets/components/mqtt-packet-reason/readonly/implementations/built-in/06-pubrel/pubrel-reason-code.enum';
import { IGenericMqttPacket } from '../../../../../packets/components/mqtt-packet/mqtt-packet.type';
import { IAdvancedMqttClientWatchFunction } from '../../../traits/watch/advanced-mqtt-client.watch.function-definition';

export interface ICreateAdvancedMqttClientWatchFunctionOptions {
  input$: IPushSourceWithBackPressure<IGenericMqttPacket>;
  $output: IPushSinkWithBackPressure<IGenericMqttPacket>;
  packetIdManager: IMqttPacketIdManager;
}

export function createAdvancedMqttClientWatchFunction(
  {
    input$,
    $output,
    packetIdManager,
  }: ICreateAdvancedMqttClientWatchFunctionOptions,
): IAdvancedMqttClientWatchFunction {
  return (
    abortable: Abortable,
  ): AsyncTask<void> => {
    const warn = (
      message: string,
    ): void => {
      console.error(message);
    };

    return input$((
      packet: IGenericMqttPacket,
      abortable: Abortable,
    ): AsyncTask<void> => {
      if (isMqttPubackPacket(packet)) {
        if (!packetIdManager.has(packet.getPacketId())) {
          warn(`Received unhandled PUBACK`);
        }
      } else if (isMqttPubrecPacket(packet)) {
        if (!packetIdManager.has(packet.getPacketId())) {
          warn(`Received unhandled PUBREC`);
          return $output(
            createReadonlyMqttPubrelPacket({
              packetId: packet.getPacketId(),
              reason: createMqttPacketPubrelReason(PUBREL_REASON_CODE.PACKET_IDENTIFIER_NOT_FOUND),
              properties: EMPTY_READONLY_MQTT_PACKET_PROPERTY_LIST_CONSTANT,
            }),
            abortable,
          );
        }
      } else if (isMqttPubcompPacket(packet)) {
        if (!packetIdManager.has(packet.getPacketId())) {
          warn(`Received unhandled PUBCOMP`);
        }
      } else if (isMqttSubackPacket(packet)) {
        if (!packetIdManager.has(packet.getPacketId())) {
          warn(`Received unhandled SUBACK`);
        }
      }

      return AsyncTask.void(abortable);
    }, abortable);
  };
}
