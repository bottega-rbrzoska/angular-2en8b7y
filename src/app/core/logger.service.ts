import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  constructor(private _http: HttpClient) {
    console.log('init logger');
  }

  hello() {
    console.log('hello from logger');
  }
}
