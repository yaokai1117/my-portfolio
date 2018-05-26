import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appScrollSlowly]'
})
export class ScrollSlowlyDirective {

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll')
  onScroll() {
    const scrollSpeed = 5;
    let bgScroll = (this.el.nativeElement.scrollTop - window.scrollY) / scrollSpeed;
    let bgPosition = 'center '+ bgScroll + 'px';
    this.el.nativeElement.style.backgroundPosition = bgPosition;
  }
}
