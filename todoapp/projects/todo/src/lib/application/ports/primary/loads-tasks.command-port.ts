import { InjectionToken } from '@angular/core';
import {Observable} from "rxjs";

export const LOADS_TASKS_COMMAND_PORT = new InjectionToken<LoadsTasksCommandPort>(
  'LOADS_TASKS_COMMAND_PORT',
);

export interface LoadsTasksCommandPort {
  loadsTasks(command: LoadsTasksCommand): Observable<any>;
}

export interface LoadsTasksCommand {}
