import { NgModule } from '@angular/core';
import {TasksListComponent} from "./tasks-list.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    TasksListComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TasksListComponent
  ]
})
export class TasksListComponentModule { }
