import { Component, OnInit, Input } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

@Component({
    selector: 'app-google-maps',
    templateUrl: './google-maps.component.html',
    styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {

    @Input()
    latitude: number;
    @Input()
    longitude: number;
    zoom: number = 15;

    constructor(private mapsAPILoader: MapsAPILoader) { }

    ngOnInit() {
    }

}
