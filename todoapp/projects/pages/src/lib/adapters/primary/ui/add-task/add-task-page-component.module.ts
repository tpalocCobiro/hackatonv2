import { NgModule } from '@angular/core';
import {AddTaskPageComponent} from "./add-task-page.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AddTaskPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'add-task',
        component: AddTaskPageComponent,
      },
    ]),
  ],
})
export class AddTaskPageComponentModule { }
