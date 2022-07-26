import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service';
import { HttpClientModule } from '@angular/common/http';
import { INTERCEPTORS } from './interceptors';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [...INTERCEPTORS]
})
export class CoreModule { }
