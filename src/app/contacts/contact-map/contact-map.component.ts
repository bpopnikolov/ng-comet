import { Component, OnInit, Input } from '@angular/core';
import { MapsAPILoader, } from '@agm/core';

@Component({
  selector: 'app-contact-map',
  templateUrl: './contact-map.component.html',
  styleUrls: ['./contact-map.component.scss']
})
export class ContactMapComponent implements OnInit {

  @Input()
  latitude: number;
  @Input()
  longitude: number;
  zoom: number = 15;


  constructor(private mapsAPILoader: MapsAPILoader) { }

  ngOnInit() {
  }
}
