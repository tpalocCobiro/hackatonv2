import { NgModule } from '@angular/core';
import {TasksListComponent} from "./tasks-list.component";
import {CommonModule} from "@angular/common";
import {AddTaskFormComponentModule} from "../add-task-form/add-task-form-component.module";

@NgModule({
  declarations: [
    TasksListComponent,
  ],
  imports: [
    CommonModule,
    AddTaskFormComponentModule,
  ],
  exports: [
    TasksListComponent
  ]
})
export class TasksListComponentModule { }
