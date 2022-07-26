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

  obs1$ = new Observable((obs) => {
    obs.next(1);
    obs.error('error');
    obs.next(3);
  });

  private subj = new Subject();
  private bSubj = new BehaviorSubject('test1')
  bSubj$ = this.bSubj.asObservable();
  private rSubj = new ReplaySubject(5);
  private aSubj = new AsyncSubject();
  private obs2$ = fromEvent(window.document, 'click')

  constructor(private _http: HttpClient) {

    this.subj.subscribe(x => console.log(x));
    this.subj.next(2)
    this.subj.subscribe(x => console.log(x));
    this.aSubj.subscribe(x => console.log(x))
    this.aSubj.next('a1')
    this.aSubj.next('a2')
    this.aSubj.subscribe(x => console.log(x))
    this.aSubj.next('a3')
    this.aSubj.complete()
    console.log(this.bSubj.value)
    this.bSubj.next('test2');
    console.log(this.bSubj.value)
   }


   refreshData() {
    this.bSubj.next(this.bSubj.value+'1')
   }

   getTestData() {
    return this._http.get<any>('http://localhost:3000/test')
   }
}
