import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appChange]'
})
export class ChangeDirective {

    constructor(private el:ElementRef) {}


    @HostListener('mouseenter') onMouseEnter(){
        (this.el.nativeElement as HTMLElement).style.backgroundColor = 'red';

        (this.el.nativeElement as HTMLElement).style.transition = 'all' + animationSpeed + 's'; 
    }

    @HostListener('mouseleave') onMouseLeave(){
        (this.el.nativeElement as HTMLElement).style.backgroundColor = 'transparent';
    }


    @Input('appChange');

}

