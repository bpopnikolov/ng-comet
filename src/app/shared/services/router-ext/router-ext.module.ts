import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterExtService } from './router-ext.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [],
})
export class RouterExtModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: RouterExtModule,

            providers: [
                RouterExtService,
            ],
        };
    }
}
