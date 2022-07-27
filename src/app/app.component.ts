import { Component } from '@angular/core';
import { MfSharedLibService } from 'mf-shared-lib';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'dtiq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dtiq';
  constructor(private _auth: AuthService, private _sharedLib: MfSharedLibService) {
    //this._auth.init();
  }

  changeData() {
    this._sharedLib.changeData('from app component'+ Math.random());
  }
}
