import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {ContentLayoutComponent} from './layout/content-layout/content-layout.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, ContentLayoutComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
