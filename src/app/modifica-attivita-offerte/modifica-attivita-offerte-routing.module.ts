import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaAttivitaOffertePage } from './modifica-attivita-offerte.page';

const routes: Routes = [
  {
    path: '',
    component: ModificaAttivitaOffertePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificaAttivitaOffertePageRoutingModule {}
