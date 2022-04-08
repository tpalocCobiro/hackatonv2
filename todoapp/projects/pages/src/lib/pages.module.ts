import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HomepageComponentModule} from "./adapters/primary/ui/homepage/homepage-component.module";
import {HomepageComponent} from "./adapters/primary/ui/homepage/homepage.component";
import {AddTaskPageComponentModule} from "./adapters/primary/ui/add-task/add-task-page-component.module";
import {
  RouterRedirectToAddingTaskServiceModule
} from "./adapters/secondary/infrastructure/router-redirects-to-adding-task/router-redirect-to-adding-task-service.module";
import {
  RedirectToAddingTaskServiceModule
} from "./application/services/redirect-to-adding-task/redirect-to-adding-task-service.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomepageComponent,
      },
    ]),
    HomepageComponentModule,
    AddTaskPageComponentModule,
    RedirectToAddingTaskServiceModule,
    RouterRedirectToAddingTaskServiceModule,
  ],
  exports: [

  ]
})
export class PagesModule { }
