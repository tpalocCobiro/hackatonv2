import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HomepageComponentModule} from "./adapters/primary/ui/homepage/homepage-component.module";
import {HomepageComponent} from "./adapters/primary/ui/homepage/homepage.component";
import {AddTaskPageComponentModule} from "./adapters/primary/ui/add-task/add-task-page-component.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomepageComponentModule,
    AddTaskPageComponentModule,
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
