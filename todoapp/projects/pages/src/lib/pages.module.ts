import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HomepageComponentModule} from "./adapters/primary/ui/homepage/homepage-component.module";
import {HomepageComponent} from "./adapters/primary/ui/homepage/homepage.component";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomepageComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomepageComponent,
      },
    ]),
  ],
  exports: [

  ]
})
export class PagesModule { }
