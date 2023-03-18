import { Abortable, AsyncTask } from '@lirx/async-task';

export interface IAdvancedMqttClientWatchFunction {
  (
    abortable: Abortable,
  ): AsyncTask<void>;
}
