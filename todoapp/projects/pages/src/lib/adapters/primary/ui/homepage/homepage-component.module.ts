import { NgModule } from '@angular/core';
import {HomepageComponent} from "./homepage.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageComponentModule { }
