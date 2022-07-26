import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../core/auth.service';

@Directive({
  selector: '[dtiqAuth]'
})
export class AuthDirective {
  private _subscription: Subscription;
  constructor(private _auth: AuthService,
    private _temp: TemplateRef<any>,
    private _vcr: ViewContainerRef) {
      this._subscription = this._auth.authData$.subscribe(user => {
        this._vcr.clear();
        if(!!user) {
          this._vcr.createEmbeddedView(this._temp)
        }
      })
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
