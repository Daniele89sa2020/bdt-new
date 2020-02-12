import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfiloAnagraficaPage } from './profilo-anagrafica.page';

const routes: Routes = [
  {
    path: '',
    component: ProfiloAnagraficaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfiloAnagraficaPageRoutingModule {}
