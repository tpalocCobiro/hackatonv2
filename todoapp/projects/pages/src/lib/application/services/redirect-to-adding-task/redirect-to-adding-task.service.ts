import {
  RedirectToAddingTaskCommand,
  RedirectToAddingTaskCommandPort
} from "../../ports/primary/redirect-to-adding-task.command-port";
import {Inject, Injectable} from "@angular/core";
import {
  REDIRECTS_TO_ADDING_TASK_DTO_PORT,
  RedirectsToAddingTaskDtoPort
} from "../../ports/secondary/redirects-to-adding-task-dto.port";

@Injectable()
export class RedirectToAddingTaskService implements RedirectToAddingTaskCommandPort {
  constructor(@Inject(REDIRECTS_TO_ADDING_TASK_DTO_PORT) private _redirectsToAddingTask: RedirectsToAddingTaskDtoPort) {
  }

  redirect(command: RedirectToAddingTaskCommand): void {
    this._redirectsToAddingTask.redirect({});
  }
}
