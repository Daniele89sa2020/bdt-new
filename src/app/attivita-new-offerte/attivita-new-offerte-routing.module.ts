import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttivitaNewOffertePage } from './attivita-new-offerte.page';

const routes: Routes = [
  {
    path: '',
    component: AttivitaNewOffertePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttivitaNewOffertePageRoutingModule {}
