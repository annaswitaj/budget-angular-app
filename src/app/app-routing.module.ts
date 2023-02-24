import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContentLayoutComponent} from './layout/content-layout/content-layout.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: '',
    component: ContentLayoutComponent,

    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            m => m.DashboardModule
          )
      },
      {
        path: 'budgets',
        loadChildren: () =>
          import('./modules/budgets/budgets.module').then(m => m.BudgetsModule)
      },
      {
        path: 'wallet',
        loadChildren: () =>
          import('./modules/wallet/wallet.module').then(m => m.WalletModule)
      }
    ]
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledBlocking',
      enableTracing: false,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
