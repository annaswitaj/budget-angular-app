import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';

import {DashboardComponent} from './components/dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, DashboardRoutingModule]
})
export class DashboardModule {}
