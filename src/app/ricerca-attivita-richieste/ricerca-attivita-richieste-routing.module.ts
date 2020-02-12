import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RicercaAttivitaRichiestePage } from './ricerca-attivita-richieste.page';

const routes: Routes = [
  {
    path: '',
    component: RicercaAttivitaRichiestePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RicercaAttivitaRichiestePageRoutingModule {}
