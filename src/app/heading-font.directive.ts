import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHeadingFont]'
})
export class HeadingFontDirective implements OnInit {

  constructor(private elementRef: ElementRef<any>) {}

  ngOnInit() {
    // Lógica para aplicar estilos o modificaciones al elemento
    this.elementRef.nativeElement.style.fontSize = '20px';
    this.elementRef.nativeElement.style.display = 'flex';
    this.elementRef.nativeElement.style.justifyContent = 'center';
    this.elementRef.nativeElement.style.alignItems = 'center';
  
  }
}
