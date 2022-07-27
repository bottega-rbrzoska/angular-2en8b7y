import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'dtiq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dtiq';
  constructor(private _auth: AuthService) {
    this._auth.init();
  }
}
