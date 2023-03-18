import { IReadonlyStringBuffer } from '../../../../../classes/string-buffer/readonly/readonly-string-buffer.type';
import {
  IGenericReadonlyMqttPacketPropertyList,
} from '../../../../packets/components/mqtt-packet-property-list/readonly/readonly-mqtt-packet-property-list.type';
import {
  IGenericReadonlyMqttPacketReason,
} from '../../../../packets/components/mqtt-packet-reason/readonly/readonly-mqtt-packet-reason.type';

export interface IMqttPacketHavingGetPropertiesAndGetReason {
  getProperties: () => IGenericReadonlyMqttPacketPropertyList;
  getReason: () => IGenericReadonlyMqttPacketReason;
}

export interface IMessageAndReasonCode {
  message: string;
  reasonCode: number;
}

export function extractMessageAndReasonCodeFromMqttPacket(
  packet: IMqttPacketHavingGetPropertiesAndGetReason,
): IMessageAndReasonCode {
  const property: IReadonlyStringBuffer | undefined = packet.getProperties().get('reasonString');

  return {
    message: (property === void 0)
      ? packet.getReason().getMessage()
      : property.toString(),
    reasonCode: packet.getReason().getCode(),
  };
}
