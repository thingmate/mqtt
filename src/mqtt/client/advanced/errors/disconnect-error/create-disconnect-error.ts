import { createCustomError } from '@lirx/utils';
import { DISCONNECT_ERROR_NAME, IDisconnectErrorName } from './disconnect-error-name.constant';
import { IDisconnectError, IDisconnectErrorOptions, IDisconnectErrorProperties } from './disconnect-error.type';

export function createDisconnectError(
  options?: IDisconnectErrorOptions,
): IDisconnectError {
  return createCustomError<IDisconnectErrorName, IDisconnectErrorProperties>({
    name: DISCONNECT_ERROR_NAME,
    message: 'Disconnected',
    reasonCode: void 0,
    ...options,
  });
}


