import { NgModule } from '@angular/core';
import {AddTaskFormComponent} from "./add-task-form.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AddTaskFormComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddTaskFormComponent
  ]
})
export class AddTaskFormComponentModule { }
