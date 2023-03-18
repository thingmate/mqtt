import { IReadonlyStringBufferToStringTrait } from './traits/to-string/readonly-string-buffer.to-string.trait';
import { IReadonlyStringBufferToUint8ArrayTrait } from './traits/to-uint8-array/readonly-string-buffer.to-uint8-array.trait';

export interface IReadonlyStringBuffer extends //
  IReadonlyStringBufferToUint8ArrayTrait,
  IReadonlyStringBufferToStringTrait
//
{

}
