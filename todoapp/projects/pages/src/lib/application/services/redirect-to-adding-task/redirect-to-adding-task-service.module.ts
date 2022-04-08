import {NgModule} from "@angular/core";
import {RedirectToAddingTaskService} from "./redirect-to-adding-task.service";
import {REDIRECT_TO_ADDING_TASK_COMMAND_PORT} from "../../ports/primary/redirect-to-adding-task.command-port";

@NgModule({
  providers: [
    RedirectToAddingTaskService,
    { provide: REDIRECT_TO_ADDING_TASK_COMMAND_PORT, useClass: RedirectToAddingTaskService },
  ],
})
export class RedirectToAddingTaskServiceModule {}
