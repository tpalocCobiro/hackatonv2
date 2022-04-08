import { NgModule } from '@angular/core';
import {AddTaskFormComponent} from "./add-task-form.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AddTaskFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    AddTaskFormComponent
  ]
})
export class AddTaskFormComponentModule { }
