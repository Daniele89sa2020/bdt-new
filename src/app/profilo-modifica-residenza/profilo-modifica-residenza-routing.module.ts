import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfiloModificaResidenzaPage } from './profilo-modifica-residenza.page';

const routes: Routes = [
  {
    path: '',
    component: ProfiloModificaResidenzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfiloModificaResidenzaPageRoutingModule {}
