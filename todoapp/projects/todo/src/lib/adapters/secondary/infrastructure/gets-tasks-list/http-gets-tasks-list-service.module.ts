import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpGetsTasksListService} from "./http-gets-tasks-list.service";
import {ADDS_TASK_DTO_PORT} from "../../../../application/ports/secondary/adds-task.dto-port";
import {HttpClientModule} from "@angular/common/http";
import {GETS_TASKS_LIST_DTO_PORT} from "../../../../application/ports/secondary/gets-tasks-list.dto-port";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    HttpGetsTasksListService,
    {
      provide: GETS_TASKS_LIST_DTO_PORT,
      useExisting: HttpGetsTasksListService
    }
  ]
})
export class HttpGetsTasksListServiceModule {
}
