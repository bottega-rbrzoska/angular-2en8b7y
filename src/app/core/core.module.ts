import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service';
import { HttpClientModule } from '@angular/common/http';
import { INTERCEPTORS } from './interceptors';
import { LoggerInterceptor } from './logger.interceptor';

// const testFactory = (logger: LoggerService) => new MyCustomLogger(LoggerInterceptor)

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [...INTERCEPTORS,
    LoggerService
  // { provide: LoggerService, useFactory: testFactory, deps:[LoggerService]}]
  ]
})
export class CoreModule { }
