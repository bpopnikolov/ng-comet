import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsService } from './google-maps.service';
import { GoogleMapsComponent } from './google-maps.component';
import { AgmCoreModule } from '@agm/core';

const COMPONENTS = [GoogleMapsComponent];

@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBWdbXMftu9v6hVI73eFExumntT7e-x1oI',
            libraries: ['places']
        }),
    ],
    declarations: COMPONENTS,
    providers: [GoogleMapsService],
    exports: [
        ...COMPONENTS,
        AgmCoreModule,
    ]

})
export class GoogleMapsModule { }
