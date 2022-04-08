import {AddsTaskCommand, AddsTaskCommandPort} from "../ports/primary/adds-task-command.port";
import {Inject, Injectable} from "@angular/core";
import {ADDS_TASK_DTO_PORT, AddsTaskDtoPort} from "../ports/secondary/adds-task.dto-port";

@Injectable()
export class TasksState implements AddsTaskCommandPort {
  constructor(@Inject(ADDS_TASK_DTO_PORT) private _addsTaskDtoPort: AddsTaskDtoPort) {
  }

  add(command: AddsTaskCommand): void {
    this._addsTaskDtoPort.add({
      description: command.description
    }).subscribe();
  }
}
