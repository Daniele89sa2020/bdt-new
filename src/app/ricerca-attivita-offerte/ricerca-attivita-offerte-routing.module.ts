import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RicercaAttivitaOffertePage } from './ricerca-attivita-offerte.page';

const routes: Routes = [
  {
    path: '',
    component: RicercaAttivitaOffertePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RicercaAttivitaOffertePageRoutingModule {}
