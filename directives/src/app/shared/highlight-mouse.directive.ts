import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';


@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  constructor(
    //private _elementRef: ElementRef,
    //private _renderer: Renderer
  ) { }

  /* onMouseOver nome do metodo(pode ser qq outro nome) */
  @HostListener('mouseenter') onMouseOver() {
    /*
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
    */
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {

    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'white'
    );*/
    this.backgroundColor = 'white';
  }
  private backgroundColor: string;
  //@HostBinding('style.backgroundColor') backgroundColor: string;

  
  @HostBinding('style.backgroundColor') get setColor() {

    return this.backgroundColor;
  }
  
}
