import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appChange]'
})
export class ChangeDirective {

    constructor(private el:ElementRef) {}


    @HostListener('mouseenter') onMouseEnter(){
        (this.el.nativeElement as HTMLElement).style.backgroundColor = 'red';
    }

    @HostListener('mouseleave') onMouseLeave(){
        (this.el.nativeElement as HTMLElement).style.backgroundColor = 'transparent';
    }

}
//fortsätt på 13.