import { NgModule } from '@angular/core';
import {CurrentDateComponent} from "./current-date.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    CurrentDateComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CurrentDateComponent
  ]
})
export class CurrentDateComponentModule { }
