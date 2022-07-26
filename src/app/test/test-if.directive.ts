import { Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dtiqTestIf]'
})
export class TestIfDirective {

  @Input()
  set dtiqTestIf(showEl: boolean) {
    this.vcr.clear()
    if(showEl) {
      this.vcr.createEmbeddedView(this.template)
    }
  }
// dyrektywa atrybutowa
  // constructor(private _el: ElementRef<HTMLElement>, private renderer: Renderer2) {

    // NIE!! _el.nativeElement.classList.add('redbox')
    // TAK!! renderer.addClass(_el.nativeElement, 'redbox')
  //  }

constructor(private template: TemplateRef<any>, private vcr: ViewContainerRef){
  console.log(template)

}

}
