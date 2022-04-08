import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ADDS_TASK_COMMAND_PORT} from "../ports/primary/adds-task-command.port";
import {TasksState} from "./tasks.state";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    TasksState,
    {
      provide: ADDS_TASK_COMMAND_PORT,
      useExisting: TasksState
    }
  ]
})
export class TaskStateModule { }
