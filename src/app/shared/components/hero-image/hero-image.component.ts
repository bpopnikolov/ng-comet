import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-hero-image',
    templateUrl: './hero-image.component.html',
    styleUrls: ['./hero-image.component.scss']
})
export class HeroImageComponent implements OnInit {

    @Input() heroImgUrl: string = '';
    @Input() links: any[] = [];
    constructor() { }

    ngOnInit() {
    }

}
