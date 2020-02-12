import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttivitaNewRichiestePage } from './attivita-new-richieste.page';

const routes: Routes = [
  {
    path: '',
    component: AttivitaNewRichiestePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttivitaNewRichiestePageRoutingModule {}
