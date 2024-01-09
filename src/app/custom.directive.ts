import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el:ElementRef) { }

  @HostBinding('style.background-color') bColor:string = "";

  @HostListener('mouseenter')
  handleClick(): void {
    // Handle the click event on the host element
    console.log("Host listener called");
    this.bColor = "green";
  }

  @HostListener('mouseleave')
  handleClick2(): void {
    console.log("Host listener called");
    this.bColor = "red";
  }
 
}
