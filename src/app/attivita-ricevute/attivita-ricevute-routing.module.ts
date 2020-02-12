import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttivitaRicevutePage } from './attivita-ricevute.page';

const routes: Routes = [
  {
    path: '',
    component: AttivitaRicevutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttivitaRicevutePageRoutingModule {}
