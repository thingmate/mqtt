import { IByteIteratorEncoder } from '../../../../../../../misc/codec/byte-iterator-encoder.type';
import {
  createByteIteratorEncoderForMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-encoder-for-mqtt-packet-variable-byte-integer';
import {
  createByteIteratorEncoderForReadonlyMqttPacketProperty,
} from '../../../components/mqtt-packet-property/readonly/implementations/functions/create-byte-iterator-encoder-for-readonly-mqtt-packet-property';
import { IGenericReadonlyMqttPacketProperty } from '../../../components/mqtt-packet-property/readonly/readonly-mqtt-packet-property.type';

import { IGenericReadonlyMqttPacketPropertyList } from '../../readonly-mqtt-packet-property-list.type';
import { getByteLengthOfEncodedReadonlyMqttPacketPropertyList } from './get-byte-length-of-encoded-readonly-mqtt-packet-property-list';

export function* createByteIteratorEncoderForReadonlyMqttPacketPropertyList(
  input: IGenericReadonlyMqttPacketPropertyList,
  propertiesLength: number = getByteLengthOfEncodedReadonlyMqttPacketPropertyList(input),
): IByteIteratorEncoder {
  yield* createByteIteratorEncoderForMqttPacketVariableByteInteger(propertiesLength);

  const iterator: Iterator<IGenericReadonlyMqttPacketProperty> = input.listProperties();
  let result: IteratorResult<IGenericReadonlyMqttPacketProperty>;
  while (!(result = iterator.next()).done) {
    yield* createByteIteratorEncoderForReadonlyMqttPacketProperty(result.value);
  }
}

