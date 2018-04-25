import { MapService } from './../shared/map.service';
import { Component, OnInit, Input } from '@angular/core';
import { MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-contact-map',
  templateUrl: './contact-map.component.html',
  styleUrls: ['./contact-map.component.scss']
})
export class ContactMapComponent implements OnInit {

  latitude: number;
  longitude: number;
  zoom: number;
  address: string;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private contactService: ContactService,
    private mapService: MapService
  ) { }

  ngOnInit() {
    this.zoom = 13;
    this.latitude = 42.6977;
    this.longitude = 23.3219;

    this.address = this.contactService.getPrimaryAddress();

    this.mapService.getGeoLocation(this.address);
  }
}
