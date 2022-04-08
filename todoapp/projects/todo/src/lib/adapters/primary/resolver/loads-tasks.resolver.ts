import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import {
  LOADS_TASKS_COMMAND_PORT,
  LoadsTasksCommandPort
} from "../../../application/ports/primary/loads-tasks.command-port";

@Injectable()
export class LoadsTasksResolver implements Resolve<void> {
  constructor(@Inject(LOADS_TASKS_COMMAND_PORT) private _loadsTaskCommandPort: LoadsTasksCommandPort) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this._loadsTaskCommandPort.loadsTasks({});
  }
}
