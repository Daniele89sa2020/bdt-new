import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaPasswordProfiloPage } from './modifica-password-profilo.page';

const routes: Routes = [
  {
    path: '',
    component: ModificaPasswordProfiloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificaPasswordProfiloPageRoutingModule {}
