import { IByteIteratorDecoder } from '../../../../../../../misc/codec/byte-iterator-decoder.type';
import {
  createByteIteratorDecoderForMqttPacketVariableByteInteger,
} from '../../../../../functions/shared/number/variable-byte-integer/create-byte-iterator-decoder-for-mqtt-packet-variable-byte-integer';
import {
  createByteIteratorDecoderForReadonlyMqttPacketProperty,
} from '../../../components/mqtt-packet-property/readonly/implementations/functions/create-byte-iterator-decoder-for-readonly-mqtt-packet-property';
import {
  getByteLengthOfEncodedReadonlyMqttPacketProperty,
} from '../../../components/mqtt-packet-property/readonly/implementations/functions/get-byte-length-of-encoded-readonly-mqtt-packet-property';
import { IGenericReadonlyMqttPacketProperty } from '../../../components/mqtt-packet-property/readonly/readonly-mqtt-packet-property.type';

import { IGenericReadonlyMqttPacketPropertyList } from '../../readonly-mqtt-packet-property-list.type';
import { createReadonlyMqttPacketPropertyListFromIterable } from '../create-readonly-mqtt-packet-property-list-from-iterable';

export function* createByteIteratorDecoderForReadonlyMqttPacketPropertyList(): IByteIteratorDecoder<IGenericReadonlyMqttPacketPropertyList> {
  const properties: IGenericReadonlyMqttPacketProperty[] = [];

  let propertiesLength: number = yield* createByteIteratorDecoderForMqttPacketVariableByteInteger();

  while (propertiesLength > 0) {
    const property: IGenericReadonlyMqttPacketProperty = yield* createByteIteratorDecoderForReadonlyMqttPacketProperty();
    properties.push(property);
    propertiesLength -= getByteLengthOfEncodedReadonlyMqttPacketProperty(property);
  }

  return createReadonlyMqttPacketPropertyListFromIterable(properties);
}

