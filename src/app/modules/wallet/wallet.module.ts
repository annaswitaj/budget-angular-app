import {NgModule} from '@angular/core';

import {WalletComponent} from './components/wallet.component';
import {WalletRoutingModule} from './wallet-routing.module';

@NgModule({
  declarations: [WalletComponent],
  imports: [WalletRoutingModule]
})
export class WalletModule {}
