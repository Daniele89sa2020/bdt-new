import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettagliAttivitaRicevutePage } from './dettagli-attivita-ricevute.page';

const routes: Routes = [
  {
    path: '',
    component: DettagliAttivitaRicevutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettagliAttivitaRicevutePageRoutingModule {}
