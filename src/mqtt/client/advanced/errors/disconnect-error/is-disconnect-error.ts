import { isCustomError } from '@lirx/utils';
import { DISCONNECT_ERROR_NAME, IDisconnectErrorName } from './disconnect-error-name.constant';
import { IDisconnectError, IDisconnectErrorProperties } from './disconnect-error.type';

export function isDisconnectError(
  value: unknown,
): value is IDisconnectError {
  return isCustomError<IDisconnectErrorName, IDisconnectErrorProperties>(
    value,
    DISCONNECT_ERROR_NAME,
  );
}

