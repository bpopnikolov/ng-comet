import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-hero-image',
    templateUrl: './hero-image.component.html',
    styleUrls: ['./hero-image.component.scss']
})
export class HeroImageComponent implements OnInit {

    @Input() heroImgUrl: string = 'https://images.pexels.com/photos/358513/pexels-photo-358513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    @Input() links: any[] = [];
    constructor() { }

    ngOnInit() {
        console.log(this.heroImgUrl);
    }

}
