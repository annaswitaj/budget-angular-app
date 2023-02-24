import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';

export const appRoutes: Route[] = [];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledBlocking',
      enableTracing: false,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
