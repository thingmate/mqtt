import { IByteIteratorEncoder } from '../../../../../../../../../misc/codec/byte-iterator-encoder.type';
import { IMqttProtocolVersion } from '../../../../../../../../constants/mqtt-protocol-version.type';
import {
  createByteIteratorEncoderForReadonlyMqttPacketPayloadWithLength,
} from '../../../../../../../components/mqtt-packet-payload/readonly/implementations/functions/with-length/create-byte-iterator-encoder-for-readonly-mqtt-packet-payload-with-length';
import {
  createByteIteratorEncoderForReadonlyMqttPacketPropertyList,
} from '../../../../../../../components/mqtt-packet-property-list/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-packet-property-list';
import {
  createByteIteratorEncoderForReadonlyMqttPacketTopic,
} from '../../../../../../../components/mqtt-packet-topic/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-packet-topic';
import { IReadonlyMqttConnectPacketWill } from '../../readonly-mqtt-connect-packet-will.type';

export function* createByteIteratorEncoderForReadonlyMqttConnectPacketWill(
  {
    getProperties,
    getTopic,
    getPayload,
  }: IReadonlyMqttConnectPacketWill,
  protocolVersion: IMqttProtocolVersion,
): IByteIteratorEncoder {
  // V5: properties
  if (protocolVersion === 5) {
    yield* createByteIteratorEncoderForReadonlyMqttPacketPropertyList(getProperties());
  }
  yield* createByteIteratorEncoderForReadonlyMqttPacketTopic(getTopic());
  yield* createByteIteratorEncoderForReadonlyMqttPacketPayloadWithLength(getPayload());
}

