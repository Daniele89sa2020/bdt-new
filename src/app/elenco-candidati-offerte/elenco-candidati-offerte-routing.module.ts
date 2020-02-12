import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElencoCandidatiOffertePage } from './elenco-candidati-offerte.page';

const routes: Routes = [
  {
    path: '',
    component: ElencoCandidatiOffertePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElencoCandidatiOffertePageRoutingModule {}
