import { Component, OnInit, Input } from '@angular/core';
import { MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
import { ContactService } from '../../shared/services/contact/contact.service';

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
  zoom: number = 13;


  constructor(private mapsAPILoader: MapsAPILoader) { }

  ngOnInit() {
  }
}
