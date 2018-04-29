import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Directive({
    selector: '[appBackgroundImage]'
})
export class BackgroundImageDirective {

    @Input('appBackgroundImage') appBackgroundImage: string;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        private sanitizer: DomSanitizer
    ) {

    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }

    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.renderer.setStyle(this.el.nativeElement, 'background-image', `url(${this.appBackgroundImage})`);
    }
}
