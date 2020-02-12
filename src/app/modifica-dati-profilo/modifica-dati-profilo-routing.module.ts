import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaDatiProfiloPage } from './modifica-dati-profilo.page';

const routes: Routes = [
  {
    path: '',
    component: ModificaDatiProfiloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificaDatiProfiloPageRoutingModule {}
