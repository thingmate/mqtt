import { isCustomError } from '@lirx/utils';
import { ISubscribeErrorName, SUBSCRIBE_ERROR_NAME } from './subscribe-error-name.constant';
import { ISubscribeError, ISubscribeErrorProperties } from './subscribe-error.type';

export function isSubscribeError(
  value: unknown,
): value is ISubscribeError {
  return isCustomError<ISubscribeErrorName, ISubscribeErrorProperties>(
    value,
    SUBSCRIBE_ERROR_NAME,
  );
}

