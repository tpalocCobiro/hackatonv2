import { InjectionToken } from '@angular/core';
import {Observable} from "rxjs";

export const GETS_TASKS_LIST_DTO_PORT = new InjectionToken<GetsTasksListDtoPort>('GETS_TASKS_LIST_DTO_PORT');

export interface GetsTasksListDtoPort {
  get(): Observable<Task[]>;
}

export interface Task {
  id: number;
  description: string,
}
