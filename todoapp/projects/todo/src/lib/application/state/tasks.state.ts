import {AddsTaskCommand, AddsTaskCommandPort} from "../ports/primary/adds-task-command.port";
import {Inject, Injectable} from "@angular/core";
import {ADDS_TASK_DTO_PORT, AddsTaskDtoPort} from "../ports/secondary/adds-task.dto-port";
import {LoadsTasksCommand, LoadsTasksCommandPort} from "../ports/primary/loads-tasks.command-port";
import {map, Observable, of, tap} from "rxjs";
import {Storage} from "./storage";
import {GETS_TASKS_LIST_DTO_PORT, GetsTasksListDtoPort, Task} from "../ports/secondary/gets-tasks-list.dto-port";
import {GetsTasksListQueryPort} from "../ports/primary/gets-tasks-list.query-port";

@Injectable()
export class TasksState implements AddsTaskCommandPort, LoadsTasksCommandPort, GetsTasksListQueryPort {
  private _storage = new Storage<Task[]>();

  constructor(
    @Inject(ADDS_TASK_DTO_PORT) private _addsTaskDtoPort: AddsTaskDtoPort,
    @Inject(GETS_TASKS_LIST_DTO_PORT) private _getsTasksListDtoPort: GetsTasksListDtoPort
  ) {
  }

  add(command: AddsTaskCommand): void {
    this._addsTaskDtoPort.add({
      description: command.description
    }).subscribe(() => {
      // TODO redirectiong to list - dispatch an event by event-port
    });
  }

  loadsTasks(command: LoadsTasksCommand): Observable<any> {
    return this._getsTasksListDtoPort.get().pipe(
      tap(tasks => {
        this._storage.set(tasks);
      })
    );
  }

  getTasksListQuery(): Observable<{
    id: number,
    description: string,
  }[]> {
    return this._storage.select().pipe(
      map(tasks => tasks.map(task => ({
        id: task.id,
        description: task.description
      })))
    );
  }
}
