import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {BudgetModule} from './budget/budget.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BudgetModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
