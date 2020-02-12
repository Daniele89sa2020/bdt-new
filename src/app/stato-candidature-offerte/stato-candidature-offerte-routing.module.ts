import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatoCandidatureOffertePage } from './stato-candidature-offerte.page';

const routes: Routes = [
  {
    path: '',
    component: StatoCandidatureOffertePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatoCandidatureOffertePageRoutingModule {}
