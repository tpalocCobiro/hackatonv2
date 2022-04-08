import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CurrentDateComponentModule} from "../../projects/shared/src/lib/current-date/current-date-component.module";
import {PagesModule} from "../../projects/pages/src/lib/pages.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ApplicationBusModule} from "@cobiro/eda";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    CurrentDateComponentModule,
    BrowserAnimationsModule,
    ApplicationBusModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
