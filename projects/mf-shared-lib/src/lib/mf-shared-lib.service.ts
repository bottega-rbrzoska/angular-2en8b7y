import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MfSharedLibService {

  private _subj = new BehaviorSubject<string | null>(null);
  data$ = this._subj.asObservable();



  constructor() {
    console.log('init shared service')
  }


  changeData(data: string) {
    this._subj.next(data)
  }
}
