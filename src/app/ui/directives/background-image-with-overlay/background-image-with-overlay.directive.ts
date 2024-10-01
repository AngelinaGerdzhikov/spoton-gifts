import { Directive, ElementRef, OnInit, inject, input } from '@angular/core';

@Directive({
  selector: '[sgBgImgWithOverlay]',
  standalone: true
})
export class BackgroundImageWithOverlay implements OnInit {
  bgImgSrc = input.required<string>();
  private hostElementRef = inject<ElementRef<HTMLElement>>(ElementRef);  

  ngOnInit() {
    this.hostElementRef.nativeElement.style.background = `linear-gradient(to top, rgb(242 248 248 / 70%), rgb(242 248 248 / 70%)), url(${this.bgImgSrc()}) center top no-repeat`;
    this.hostElementRef.nativeElement.style.position = 'relative';  
    this.hostElementRef.nativeElement.style.backgroundSize = 'cover';  
  }
}
