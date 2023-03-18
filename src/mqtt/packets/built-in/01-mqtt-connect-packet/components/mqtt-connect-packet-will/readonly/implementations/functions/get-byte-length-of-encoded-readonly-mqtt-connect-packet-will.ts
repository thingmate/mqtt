import { IMqttProtocolVersion } from '../../../../../../../../constants/mqtt-protocol-version.type';
import {
  getByteLengthOfEncodedReadonlyMqttPacketPayloadWithLength,
} from '../../../../../../../components/mqtt-packet-payload/readonly/implementations/functions/with-length/get-byte-length-of-encoded-readonly-mqtt-packet-payload-with-length';
import {
  getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength,
} from '../../../../../../../components/mqtt-packet-property-list/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-property-list-with-length';
import {
  getByteLengthOfEncodedReadonlyMqttPacketTopic,
} from '../../../../../../../components/mqtt-packet-topic/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-topic';
import { IVariableByteInteger } from '../../../../../../../functions/shared/number/variable-byte-integer/variable-byte-integer.type';
import { IReadonlyMqttConnectPacketWill } from '../../readonly-mqtt-connect-packet-will.type';

export function getByteLengthOfEncodedReadonlyMqttConnectPacketWill(
  {
    getProperties,
    getTopic,
    getPayload,
  }: IReadonlyMqttConnectPacketWill,
  protocolVersion: IMqttProtocolVersion,
): number {
  let length: IVariableByteInteger = 0;

  // V5: will's properties
  if (protocolVersion === 5) {
    length += getByteLengthOfEncodedReadonlyMqttPacketPropertyListWithLength(getProperties());
  }

  length += getByteLengthOfEncodedReadonlyMqttPacketTopic(getTopic()); // will's topic
  length += getByteLengthOfEncodedReadonlyMqttPacketPayloadWithLength(getPayload()); // will's payload

  return length;
}
