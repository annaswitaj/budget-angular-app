import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {NavbarComponent} from './main/navbar/navbar.component';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';
import {BudgetRoutingModule} from './budget-routing.module';

@NgModule({
  declarations: [MainComponent, NavbarComponent],
  imports: [BudgetRoutingModule, CommonModule, SharedModule, CoreModule]
})
export class BudgetModule {}
