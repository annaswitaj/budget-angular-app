import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BudgetsComponent} from './components/budgets.component';

export const budgetsRoutes: Routes = [
  {
    path: '',
    component: BudgetsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(budgetsRoutes)],
  exports: [RouterModule]
})
export class BudgetsRoutingModule {}
