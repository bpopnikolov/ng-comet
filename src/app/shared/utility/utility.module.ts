import { ModuleWithProviders, NgModule } from '@angular/core';
import { UtilityService } from './utility.service';
import { ValidationService } from './validation.service';

@NgModule()
export class UtilityModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: UtilityModule,

            providers: [
                UtilityService,
                ValidationService,
            ],
        };
    }
}

