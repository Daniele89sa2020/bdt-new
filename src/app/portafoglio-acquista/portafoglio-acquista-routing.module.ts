import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortafoglioAcquistaPage } from './portafoglio-acquista.page';

const routes: Routes = [
  {
    path: '',
    component: PortafoglioAcquistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortafoglioAcquistaPageRoutingModule {}
