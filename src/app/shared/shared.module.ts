import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TestIfDirective } from '../test/test-if.directive';
import { AuthDirective } from './auth.directive';
import { FrameworkSelectorComponent } from './framework-selector/framework-selector.component';

@NgModule({
  declarations: [TestIfDirective, AuthDirective, FrameworkSelectorComponent],
  imports: [CommonModule],
  exports: [TestIfDirective, AuthDirective, FrameworkSelectorComponent]
})
export class SharedModule {}
