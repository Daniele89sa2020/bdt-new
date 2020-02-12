import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PremiProdottiPage } from './premi-prodotti.page';

const routes: Routes = [
  {
    path: '',
    component: PremiProdottiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremiProdottiPageRoutingModule {}
