import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfiloModificaDatiPage } from './profilo-modifica-dati.page';

const routes: Routes = [
  {
    path: '',
    component: ProfiloModificaDatiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfiloModificaDatiPageRoutingModule {}
