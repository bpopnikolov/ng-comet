import { ModuleWithProviders, NgModule } from '@angular/core';
import { ValidationService } from './validation.service';
import { UtilityService } from './utility.service';

@NgModule()
export class UtilityModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilityModule,

      providers: [
        UtilityService,
        ValidationService
      ]
    };
  }
}

