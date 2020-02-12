import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminiCondizioniPage } from './termini-condizioni.page';

const routes: Routes = [
  {
    path: '',
    component: TerminiCondizioniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminiCondizioniPageRoutingModule {}
