import {NgModule} from "@angular/core";
import {provideApplicationEventsHandler} from "@cobiro/eda";
import {RedirectToAddingTaskEventHandler} from "./redirect-to-adding-task/redirect-to-adding-task.event-handler";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule
  ],
  providers: [
    provideApplicationEventsHandler(RedirectToAddingTaskEventHandler)
  ]
})
export class EventHandlersModule { }
