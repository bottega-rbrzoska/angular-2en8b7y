import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TestIfDirective } from '../test/test-if.directive';
import { AuthDirective } from './auth.directive';

@NgModule({
  declarations: [TestIfDirective, AuthDirective],
  imports: [CommonModule],
  exports: [TestIfDirective, AuthDirective]
})
export class SharedModule {}
