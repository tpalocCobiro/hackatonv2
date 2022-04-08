import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CurrentDateComponentModule} from "../../projects/shared/src/lib/hero/current-date-component.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CurrentDateComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
