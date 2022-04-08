import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ADDS_TASK_COMMAND_PORT} from "../ports/primary/adds-task-command.port";
import {TasksState} from "./tasks.state";
import {LOADS_TASKS_COMMAND_PORT} from "../ports/primary/loads-tasks.command-port";
import {GETS_TASKS_LIST_QUERY_PORT} from "../ports/primary/gets-tasks-list.query-port";

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
      useExisting: TasksState,
    },
    {
      provide: LOADS_TASKS_COMMAND_PORT,
      useExisting: TasksState,
    }, {
      provide: GETS_TASKS_LIST_QUERY_PORT,
      useExisting: TasksState,
    }
  ]
})
export class TaskStateModule { }
