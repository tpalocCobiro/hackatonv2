import { NgModule } from '@angular/core';
import {TasksListPageComponent} from "./tasks-list-page.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {TaskStateModule, HttpAddsTaskServiceModule, TasksListComponentModule } from './../../../../../../../todo/src/public-api';


@NgModule({
  declarations: [
    TasksListPageComponent,
  ],
  imports: [
    CommonModule,
    TaskStateModule,
    HttpAddsTaskServiceModule,
    TasksListComponentModule,
    RouterModule.forChild([
      {
        path: 'tasks-list',
        component: TasksListPageComponent,
      },
    ]),
  ],
})
export class TasksListPageComponentModule { }
