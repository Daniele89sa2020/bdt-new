import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettagliCandidatoPage } from './dettagli-candidato.page';

const routes: Routes = [
  {
    path: '',
    component: DettagliCandidatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettagliCandidatoPageRoutingModule {}
