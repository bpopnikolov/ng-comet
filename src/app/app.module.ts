import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { FacebookModule } from 'ngx-facebook';
import { AppConfigService } from './app-config.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home';
import { ContainersModule } from './shared/containers';
import { AuthModule } from './shared/services/auth/auth.module';
import { UtilityModule } from './shared/utility';
import { UserModule } from './user/user.module';
import { LinkModule } from './shared/services/link';
import { ContactsModule } from './contacts';
import { ContactService } from './shared/services/contact';
import { JobadsService } from './shared/services/jobads/jobads.service';
import { JobAdsResolver } from './shared/services/jobads/jobads.resolver';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './app-material';



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
        FacebookModule.forRoot(),
        FlexLayoutModule,
        AppMaterialModule,
        ContainersModule,
        AuthModule,
        LinkModule,
        UserModule,
        HomeModule,
        ContactsModule,
        AppRoutingModule,
    ],
    providers: [
        AppConfigService,
        ContactService,
        JobadsService,
        JobAdsResolver,
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
