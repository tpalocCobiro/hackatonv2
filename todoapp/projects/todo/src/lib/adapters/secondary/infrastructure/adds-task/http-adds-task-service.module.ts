import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpAddsTaskService} from "./http-adds-task.service";
import {ADDS_TASK_DTO_PORT} from "../../../../application/ports/secondary/adds-task.dto-port";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    HttpAddsTaskService,
    {
      provide: ADDS_TASK_DTO_PORT,
      useExisting: HttpAddsTaskService
    }
  ]
})
export class HttpAddsTaskServiceModule {
}
