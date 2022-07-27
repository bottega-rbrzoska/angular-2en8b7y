import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Mf1HomeComponent } from './mf1-home/mf1-home.component';

@NgModule({
  declarations: [
    Mf1HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
})
export class AppModule { }
