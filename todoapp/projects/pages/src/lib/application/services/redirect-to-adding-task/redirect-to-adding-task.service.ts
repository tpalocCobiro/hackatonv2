import {
  RedirectToAddingTaskCommand,
  RedirectToAddingTaskCommandPort
} from "../../ports/primary/redirect-to-adding-task.command-port";
import {Inject, Injectable} from "@angular/core";
import {APPLICATION_BUS, Dispatcher} from "@cobiro/eda";
import {AddTaskStartedEvent} from "../../events/add-task-started.event";

@Injectable()
export class RedirectToAddingTaskService implements RedirectToAddingTaskCommandPort {
  constructor(@Inject(APPLICATION_BUS) private _applicationBus: Dispatcher<AddTaskStartedEvent>) {
  }

  redirect(command: RedirectToAddingTaskCommand): void {
    this._applicationBus.dispatch(new AddTaskStartedEvent());
  }
}
