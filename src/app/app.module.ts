import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModuleModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainersModule } from './shared/containers';
import { HomeModule } from './home';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContainersModule,
    HomeModule,
    AppRoutingModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
