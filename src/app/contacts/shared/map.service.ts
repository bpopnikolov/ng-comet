import { GoogleMapsAPIWrapper, MapsAPILoader, AgmCoreModule } from '@agm/core';
import { Injectable, NgZone } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { } from '@types/googlemaps'


let google: any;

@Injectable()
export class MapService extends GoogleMapsAPIWrapper {

  constructor(private __loader: MapsAPILoader, private __zone: NgZone) {
    super(__loader, __zone);
  }

  /**
   * Gets the coordingates (lat,lng) from a string address using Google API 
   * geocoding service.
   * @param {string} [address] String representation of the address to be geocoded.
   * @returns {Observable<any>} Location object which has coords attributes.
   */
  getGeoLocation(address: string): Observable<any> {
    console.log('Getting address: ', address);
    let geocoder = new google.maps.Geocode();
    return Observable.create(observer => {
      geocoder.geocode({
        'address': address
      }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          observer.next(results[0].geometry.location);
          observer.complete();
        } else {
          console.log('Error: ', results, ' & Status: ', status);
          observer.error();
        }
      });
    });
  }
}
