import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettagliRicercaPage } from './dettagli-ricerca.page';

const routes: Routes = [
  {
    path: '',
    component: DettagliRicercaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettagliRicercaPageRoutingModule {}
