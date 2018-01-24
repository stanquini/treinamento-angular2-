import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})

/*

* TemplateRef -  faz refencia ao Template
* ViewContainerRef - Faz referncia ao Container da View

*/
export class NgElseDirective {

  constructor(
    private _templateRef: TemplateRef <any>,
    private _viewContainerRef: ViewContainerRef
  ) { }

  @Input() set ngElse(condition: boolean) {

    if(!condition) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainerRef.clear();
    }
  }
}
