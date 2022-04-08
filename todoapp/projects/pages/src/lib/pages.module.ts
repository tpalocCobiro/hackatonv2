import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HomepageComponentModule} from "./adapters/primary/ui/homepage/homepage-component.module";
import {HomepageComponent} from "./adapters/primary/ui/homepage/homepage.component";
import {AddTaskPageComponentModule} from "./adapters/primary/ui/add-task/add-task-page-component.module";
import {
  RedirectToAddingTaskServiceModule
} from "./application/services/redirect-to-adding-task/redirect-to-adding-task-service.module";
import {EventHandlersModule} from "./adapters/secondary/event-handlers/event-handlers.module";

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
    EventHandlersModule,
    HomepageComponentModule,
    AddTaskPageComponentModule,
    RedirectToAddingTaskServiceModule,
  ],
  exports: [

  ]
})
export class PagesModule { }
