import { NgModule } from '@angular/core';
import {AddTaskPageComponent} from "./add-task-page.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AddTaskFormComponentModule, TaskStateModule, HttpAddsTaskServiceModule} from './../../../../../../../todo/src/public-api';


@NgModule({
  declarations: [
    AddTaskPageComponent,
  ],
  imports: [
    CommonModule,
    AddTaskFormComponentModule,
    TaskStateModule,
    HttpAddsTaskServiceModule,
    RouterModule.forChild([
      {
        path: 'add-task',
        component: AddTaskPageComponent,
      },
    ]),
  ],
})
export class AddTaskPageComponentModule { }
