import {NgModule} from '@angular/core';
import {BudgetsRoutingModule} from './budgets-routing.module';
import {BudgetsComponent} from './components/budgets.component';

@NgModule({
  declarations: [BudgetsComponent],
  imports: [BudgetsRoutingModule]
})
export class BudgetsModule {}
