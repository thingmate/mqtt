import { Abortable, AsyncTask } from '@lirx/async-task';

export function hashData(
  data: any,
  abortable: Abortable,
): AsyncTask<string> {
  return AsyncTask.fromFactory((): Promise<ArrayBuffer> => {
    return crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(JSON.stringify(data)),
    );
  }, abortable)
    .successful((key: ArrayBuffer): string => {
      return [...new Uint8Array(key)]
        .map(x => x.toString(16).padStart(2, '0'))
        .join('');
    });
}
