import { HeadingFontDirective } from './heading-font.directive';
import { ElementRef } from '@angular/core';

describe('HeadingFontDirective', () => {
  it('should create an instance', () => {
    let elementRefMock: ElementRef<any> = {
      nativeElement: document.createElement('h1')
    };
    const directive = new HeadingFontDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
