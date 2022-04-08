import {ApplicationEventsHandler, ongoingEventsOrchestrationStrategy} from "@cobiro/eda";
import {AddTaskStartedEvent} from "../../../../application/events/add-task-started.event";
import {Router} from "@angular/router";

export class RedirectToAddingTaskEventHandler implements ApplicationEventsHandler {
  eventsClasses = [AddTaskStartedEvent];
  strategy = ongoingEventsOrchestrationStrategy;

  // constructor(private readonly _router: Router) {
  // }

  handle(events: AddTaskStartedEvent[]) {
    // this._router.navigate(['add-task']);
  }
}
