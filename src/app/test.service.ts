import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AsyncSubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { from, fromEvent, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private _showFlagSubj = new BehaviorSubject<boolean>(false);
  showFlag$ = this._showFlagSubj.asObservable();
  obs1$ = new Observable((obs) => {
    obs.next(1);
    obs.error('error');
    obs.next(3);
  });

  private _sSubj = new Subject();
  private _bSubj = new BehaviorSubject('test1');
  bSubj$ = this._bSubj.asObservable();
  private _rSubj = new ReplaySubject(5);
  private _aSubj = new AsyncSubject();
  private _obs2$ = fromEvent(window.document, 'click');

  constructor(private _http: HttpClient) {
    this._sSubj.subscribe((x) => console.log(x));
    this._sSubj.next(2);
    this._sSubj.subscribe((x) => console.log(x));
    this._aSubj.subscribe((x) => console.log(x));
    this._aSubj.next('a1');
    this._aSubj.next('a2');
    this._aSubj.subscribe((x) => console.log(x));
    this._aSubj.next('a3');
    this._aSubj.complete();
    console.log(this._bSubj.value);
    this._bSubj.next('test2');
    console.log(this._bSubj.value);
  }

  toggleShow() {
    this._showFlagSubj.next(!this._showFlagSubj.value);
  }
  refreshData() {
    this._bSubj.next(this._bSubj.value + '1');
  }

  getTestData() {
    return this._http.get<any>('http://localhost:3000/test');
  }
}
