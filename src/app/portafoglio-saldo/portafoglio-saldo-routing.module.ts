import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortafoglioSaldoPage } from './portafoglio-saldo.page';

const routes: Routes = [
  {
    path: '',
    component: PortafoglioSaldoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortafoglioSaldoPageRoutingModule {}
