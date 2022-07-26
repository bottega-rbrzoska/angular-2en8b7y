import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestIfDirective } from '../test/test-if.directive';



@NgModule({
  declarations: [TestIfDirective],
  imports: [
    CommonModule
  ],
  exports: [TestIfDirective]
})
export class SharedModule { }
