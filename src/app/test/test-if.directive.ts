import { Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

import { TestService } from '../test.service';

@Directive({
  selector: '[dtiqTestIf]'
})
export class TestIfDirective {
  @Input() set dtiqTestIfDupa(num: number) {
    this._vcr.clear();
    for (let i = 0; i < num; i++) {
      this._vcr.createEmbeddedView(this._template, {
        $implicit: i,
        multiplied: i * 2
      });
    }
  }
  // @Input()
  // set dtiqTestIf(showEl: string) {
  //   console.log(showEl)
  //   if(showEl) {
  //     this.vcr.createEmbeddedView(this.template)
  //   }
  // }
  // dyrektywa atrybutowa
  // constructor(private _el: ElementRef<HTMLElement>, private renderer: Renderer2) {

  // NIE!! _el.nativeElement.classList.add('redbox')
  // TAK!! renderer.addClass(_el.nativeElement, 'redbox')
  //  }

  constructor(private _template: TemplateRef<any>, private _vcr: ViewContainerRef, private _test: TestService) {}

  @HostListener('click')
  handleClick() {}
}
