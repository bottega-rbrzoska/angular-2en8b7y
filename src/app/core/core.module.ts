import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { INTERCEPTORS } from './interceptors';
import { LoggerInterceptor } from './logger.interceptor';
import { LoggerService } from './logger.service';

// const testFactory = (logger: LoggerService) => new MyCustomLogger(LoggerInterceptor)

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    ...INTERCEPTORS,
    LoggerService
    // { provide: LoggerService, useFactory: testFactory, deps:[LoggerService]}]
  ]
})
export class CoreModule {}
