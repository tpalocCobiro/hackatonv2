import {Observable} from "rxjs";
import {InjectionToken} from "@angular/core";

export interface GetsTasksListQueryPort {
  getTasksListQuery(): Observable<{
    id: number,
    description: string,
  }[]>;
}

export const GETS_TASKS_LIST_QUERY_PORT = new InjectionToken<{
  id: number,
  description: string,
}[]>(
  'GETS_TASKS_LIST_QUERY_PORT',
);
