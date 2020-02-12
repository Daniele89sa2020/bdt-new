import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PremiPartnerPage } from './premi-partner.page';

const routes: Routes = [
  {
    path: '',
    component: PremiPartnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremiPartnerPageRoutingModule {}
