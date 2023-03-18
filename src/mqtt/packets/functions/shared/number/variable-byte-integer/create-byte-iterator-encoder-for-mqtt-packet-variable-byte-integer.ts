import { IByteIteratorEncoder } from '../../../../../../misc/codec/byte-iterator-encoder.type';
import { IVariableByteInteger } from './variable-byte-integer.type';

export function* createByteIteratorEncoderForMqttPacketVariableByteInteger(
  input: IVariableByteInteger,
): IByteIteratorEncoder {
  let digit: number = 0;
  do {
    digit = (input % 0x80) | 0;
    input = (input / 0x80) | 0;
    if (input > 0) {
      digit |= 0x80;
    }
    yield digit;
  } while (input > 0);
}

