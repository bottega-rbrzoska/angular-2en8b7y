import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';
import { User } from '../models/User';

@Component({
  selector: 'dtiq-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  auth$!: Observable<User | null>;
  constructor(private _auth: AuthService) {
    this.auth$ = this._auth.authData$;
  }

  ngOnInit(): void {
  }

  login(){
    this._auth.login();
  }

  logout() {
    this._auth.logout();
  }

}
