import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDomHighlight]'
})
export class DomHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    // not recommended by angular.
    // this.elementRef.nativeElement.style.backgroundColor = 'red';

    // recommended approach to style element in directive.
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

}