import { Abortable, AsyncTask } from '@lirx/async-task';

export interface IMinimalMqttClientDisconnectFunction {
  (
    abortable: Abortable,
  ): AsyncTask<void>;
}
