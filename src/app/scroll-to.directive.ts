import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[scrollTo]',
})
export class ScrollToDirective implements OnInit {
  @Input() scrollTo: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.addEventListener('click', () => {
      const targetElement = document.querySelector(this.scrollTo);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}