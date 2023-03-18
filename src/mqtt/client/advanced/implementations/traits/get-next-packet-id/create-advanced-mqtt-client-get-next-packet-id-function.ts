import { IMqttPacketIdManager } from '../../../../../packets/components/mqtt-packet-id-manager/mqtt-packet-id-manager.type';
import {
  IAdvancedMqttClientGetNextPacketIdFunction,
} from '../../../traits/get-next-packet-id/advanced-mqtt-client.get-next-packet-id.function-definition';

export interface ICreateAdvancedMqttClientGetNextPacketIdFunctionOptions {
  packetIdManager: IMqttPacketIdManager;
}

export function createAdvancedMqttClientGetNextPacketIdFunction(
  {
    packetIdManager,
  }: ICreateAdvancedMqttClientGetNextPacketIdFunctionOptions,
): IAdvancedMqttClientGetNextPacketIdFunction {
  return packetIdManager.next;
}
