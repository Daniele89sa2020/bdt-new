import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DomandeFrequentiPage } from './domande-frequenti.page';

const routes: Routes = [
  {
    path: '',
    component: DomandeFrequentiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DomandeFrequentiPageRoutingModule {}
