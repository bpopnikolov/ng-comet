import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home';
import { ContainersModule } from './shared/containers';
import { UtilityModule } from './shared/utility';
import { UserModule } from './user/user.module';
import { AppConfigService } from './app-config.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthModule } from './shared/services/auth/auth.module';

export function configServiceFactory(config: AppConfigService) {
    return () => config.load()
};

export function tokenGetter() {
    return localStorage.getItem('access-token');
}
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                whitelistedDomains: ['localhost:3001'],
            }
        }),
        UtilityModule.forRoot(),
        ContainersModule,
        AuthModule,
        UserModule,
        HomeModule,
        AppRoutingModule,
    ],
    providers: [
        AppConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: configServiceFactory,
            deps: [AppConfigService],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
