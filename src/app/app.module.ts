import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { SummaryComponent } from './summary/summary.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    SummaryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ItemsComponent,
    SummaryComponent
  ]
})
export class AppModule { }
