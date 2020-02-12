import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaResidenzaProfiloPage } from './modifica-residenza-profilo.page';

const routes: Routes = [
  {
    path: '',
    component: ModificaResidenzaProfiloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificaResidenzaProfiloPageRoutingModule {}
