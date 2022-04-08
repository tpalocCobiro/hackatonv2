import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {
  REDIRECT_TO_ADDING_TASK_COMMAND_PORT, RedirectToAddingTaskCommandPort
} from "../../../../application/ports/primary/redirect-to-adding-task.command-port";

@Component({
  selector: 'app-homepage',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {
  constructor(
    @Inject(REDIRECT_TO_ADDING_TASK_COMMAND_PORT) private _redirectToAddingTaskCommandPort: RedirectToAddingTaskCommandPort
  ) {
  }

  onAddTask() {
    this._redirectToAddingTaskCommandPort.redirect({});
  }
}
