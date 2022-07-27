import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject, filter, fromEvent } from 'rxjs';
import { authConfig } from '../configs/auth-config';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authSubj = new BehaviorSubject<User | null>(null);
  authData$ = this._authSubj.asObservable();
  constructor(private _http: HttpClient, private _oAuth: OAuthService) {
    const user = localStorage.getItem('user');
    if (user) {
      this._authSubj.next(JSON.parse(user));
    }
  }

  init() {
    this._oAuth.events.subscribe(e => console.log(e))
    fromEvent<StorageEvent>(window, 'storage')
      .pipe(
        filter(
          (event: StorageEvent) =>
            event.key === 'access_token' && !!sessionStorage.getItem('access_token') && !this._oAuth.hasValidAccessToken()
        )
      )
      .subscribe(() => this._oAuth.revokeTokenAndLogout());
    this._oAuth.configure(authConfig);
    this._oAuth.loadDiscoveryDocumentAndLogin().then(() => {
      if (!this._oAuth.hasValidAccessToken()) {
        this._oAuth.initCodeFlow();
      } else {
        this._authSubj.next((this._oAuth.getIdentityClaims() as any)?.sub || null);
      }
    });
  }

  login() {
    // this._http.get<User>('http://localhost:3000/auth/alojzy').subscribe((u) => {
    //   localStorage.setItem('user', JSON.stringify(u));
    //   this._authSubj.next(u);
    // });
    this._oAuth.initCodeFlow('testtesttest');
  }

  logout() {

    this._oAuth.revokeTokenAndLogout();
    this._authSubj.next(null);
  }
}
