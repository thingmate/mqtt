import { u8 } from '@lifaon/number-types';

export type IByteIteratorDecoder<GReturn> = Generator<void, GReturn, u8>;
