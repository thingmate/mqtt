import { Abortable, AsyncTask } from '@lirx/async-task';

export interface IAdvancedMqttClientPingFunction {
  (
    abortable: Abortable,
  ): AsyncTask<void>;
}
