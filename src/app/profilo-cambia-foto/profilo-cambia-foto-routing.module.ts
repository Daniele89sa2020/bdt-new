import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfiloCambiaFotoPage } from './profilo-cambia-foto.page';

const routes: Routes = [
  {
    path: '',
    component: ProfiloCambiaFotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfiloCambiaFotoPageRoutingModule {}
