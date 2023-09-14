import { Component } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';
@Component({
  selector: 'app-imgloader',
  templateUrl: './imgloader.component.html',
  styleUrls: ['./imgloader.component.css'],
 
})
export class ImgloaderComponent {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
}
  }
}


