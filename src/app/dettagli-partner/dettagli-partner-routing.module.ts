import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettagliPartnerPage } from './dettagli-partner.page';

const routes: Routes = [
  {
    path: '',
    component: DettagliPartnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettagliPartnerPageRoutingModule {}
