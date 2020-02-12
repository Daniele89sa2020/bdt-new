import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortafoglioTrasferisciPage } from './portafoglio-trasferisci.page';

const routes: Routes = [
  {
    path: '',
    component: PortafoglioTrasferisciPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortafoglioTrasferisciPageRoutingModule {}
