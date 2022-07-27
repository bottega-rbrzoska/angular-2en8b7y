import { ModuleWithProviders, NgModule } from '@angular/core';
import { MfSharedLibComponent } from './mf-shared-lib.component';
import { MfSharedLibService } from './mf-shared-lib.service';

@NgModule({
  declarations: [
    MfSharedLibComponent
  ],
  exports: [
    MfSharedLibComponent
  ]
})
export class MfSharedLibModule {
static forRoot(): ModuleWithProviders<MfSharedLibModule> {
  return {
    ngModule: MfSharedLibModule,
    providers: [MfSharedLibService]
  }
}
 }
