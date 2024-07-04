import { Component, Renderer2, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const link1 = this.elementRef.nativeElement.querySelector('#link1');
    const link2 = this.elementRef.nativeElement.querySelector('#link2');
    const link3 = this.elementRef.nativeElement.querySelector('#link3');
    const link4 = this.elementRef.nativeElement.querySelector('#link4');
    if (link1) {
      this.renderer.listen(link1, 'click', () => {
        this.scrollToElement('.header');
      });
    }

    if (link2) {
      this.renderer.listen(link2, 'click', () => {
        this.scrollToElement('.header', 1);
      });
    }

    if (link3) {
      this.renderer.listen(link3, 'click', () => {
        this.scrollToElement('.header', 2);
      });
    }

    if (link4) {
      this.renderer.listen(link4, 'click', () => {
        this.scrollToElement('.header', 3);
      });
    }
  }

  scrollToElement(elementSelector: string, instance: number = 0): void {
    const elements: NodeListOf<HTMLElement> = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
      elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
  }
}
