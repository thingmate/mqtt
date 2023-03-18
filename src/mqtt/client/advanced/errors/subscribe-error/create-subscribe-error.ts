import { createCustomError } from '@lirx/utils';
import { ISubscribeErrorName, SUBSCRIBE_ERROR_NAME } from './subscribe-error-name.constant';
import { ISubscribeError, ISubscribeErrorOptions, ISubscribeErrorProperties } from './subscribe-error.type';

export function createSubscribeError(
  options?: ISubscribeErrorOptions,
): ISubscribeError {
  return createCustomError<ISubscribeErrorName, ISubscribeErrorProperties>({
    name: SUBSCRIBE_ERROR_NAME,
    message: 'Failed to subscribe',
    reasonCode: void 0,
    ...options,
  });
}


