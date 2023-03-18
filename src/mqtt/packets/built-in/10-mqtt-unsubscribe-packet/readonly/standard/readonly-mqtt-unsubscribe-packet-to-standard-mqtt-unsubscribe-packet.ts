import { IReadonlyStringBuffer } from '../../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import {
  readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList,
} from '../../../../components/mqtt-packet-property-list/readonly/standard/readonly-mqtt-packet-property-list-to-standard-mqtt-packet-property-list';
import { IReadonlyMqttUnsubscribePacket } from '../readonly-mqtt-unsubscribe-packet.type';
import { IStandardMqttUnsubscribePacket } from './standard-mqtt-unsubscribe-packet.type';

export function readonlyMqttUnsubscribePacketToStandardMqttUnsubscribePacket(
  {
    getType,
    getPacketId,
    getProperties,
    getUnsubscriptions,
  }: IReadonlyMqttUnsubscribePacket,
): IStandardMqttUnsubscribePacket {
  return {
    type: getType(),
    packetId: getPacketId().get(),
    properties: readonlyMqttPacketPropertyListToStandardMqttPacketPropertyList(getProperties()),
    unsubscriptions: getUnsubscriptions().map((unsubscription: IReadonlyStringBuffer): string => {
      return unsubscription.toString();
    }),
  };
}
