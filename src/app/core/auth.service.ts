import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authSubj = new BehaviorSubject<User | null>(null);
  authData$ = this._authSubj.asObservable();
  constructor(private _http: HttpClient) {
    const user = localStorage.getItem('user')
    if (user) {
      this._authSubj.next(JSON.parse(user));
    }
  }

  login() {
    this._http.get<User>('http://localhost:3000/auth/alojzy')
    .subscribe(u => {
      localStorage.setItem('user', JSON.stringify(u));
      this._authSubj.next(u)
    })
  }

  logout() {
    this._authSubj.next(null)
  }
}
