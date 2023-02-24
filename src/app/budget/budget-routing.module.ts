import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';

export const budgetRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'dashboard',
    component: MainComponent
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(budgetRoutes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule {}
