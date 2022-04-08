import { NgModule } from '@angular/core';
import {HomepageComponent} from "./homepage.component";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageComponentModule { }
