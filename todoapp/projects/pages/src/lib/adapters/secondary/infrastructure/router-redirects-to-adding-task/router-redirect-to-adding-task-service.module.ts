import {NgModule} from "@angular/core";
import {RouterRedirectToAddingTaskService} from "./router-redirect-to-adding-task.service";
import {
  REDIRECTS_TO_ADDING_TASK_DTO_PORT
} from "../../../../application/ports/secondary/redirects-to-adding-task.dto-port";

@NgModule({
  providers: [
    RouterRedirectToAddingTaskService,
    { provide: REDIRECTS_TO_ADDING_TASK_DTO_PORT, useClass: RouterRedirectToAddingTaskService },
  ],
})
export class RouterRedirectToAddingTaskServiceModule {}
