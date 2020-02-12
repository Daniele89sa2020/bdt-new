import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfiloModificaPasswordPage } from './profilo-modifica-password.page';

const routes: Routes = [
  {
    path: '',
    component: ProfiloModificaPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfiloModificaPasswordPageRoutingModule {}
