import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettagliCandidaturePage } from './dettagli-candidature.page';

const routes: Routes = [
  {
    path: '',
    component: DettagliCandidaturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettagliCandidaturePageRoutingModule {}
