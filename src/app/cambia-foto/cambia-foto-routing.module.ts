import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiaFotoPage } from './cambia-foto.page';

const routes: Routes = [
  {
    path: '',
    component: CambiaFotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiaFotoPageRoutingModule {}
