import { IReadonlyStringBuffer } from './readonly/readonly-string-buffer.type';
import { IStringBufferSetTrait } from './traits/set/string-buffer.set.trait';
import { IStringBufferToUint8ArrayTrait } from './traits/to-uint8-array/string-buffer.to-uint8-array.trait';

export interface IStringBuffer extends Omit<IReadonlyStringBuffer, keyof IStringBufferToUint8ArrayTrait>, //
  IStringBufferToUint8ArrayTrait,
  IStringBufferSetTrait
//
{

}
