import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaAttivitaRichiestePage } from './modifica-attivita-richieste.page';

const routes: Routes = [
  {
    path: '',
    component: ModificaAttivitaRichiestePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificaAttivitaRichiestePageRoutingModule {}
