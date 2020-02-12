import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatoCandidatureRichiestePage } from './stato-candidature-richieste.page';

const routes: Routes = [
  {
    path: '',
    component: StatoCandidatureRichiestePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatoCandidatureRichiestePageRoutingModule {}
