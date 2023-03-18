import { IByteIteratorDecoder } from '../../../../../../misc/codec/byte-iterator-decoder.type';
import { IVariableByteInteger } from './variable-byte-integer.type';

export function* createByteIteratorDecoderForMqttPacketVariableByteInteger(): IByteIteratorDecoder<IVariableByteInteger> {
  let output: IVariableByteInteger = 0;
  let digit: number;
  let shift: number = 0;
  do {
    digit = yield;
    output = (output | ((digit & 0x7f) << shift)) >>> 0;
    shift += 7;
  } while (digit & 0x80);
  return output;
}

