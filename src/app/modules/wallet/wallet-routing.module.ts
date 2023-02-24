import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WalletComponent} from './components/wallet.component';

export const walletRoutes: Routes = [
  {
    path: '',
    component: WalletComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(walletRoutes)],
  exports: [RouterModule]
})
export class WalletRoutingModule {}
