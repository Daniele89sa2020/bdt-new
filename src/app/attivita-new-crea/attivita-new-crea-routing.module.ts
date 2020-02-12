import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttivitaNewCreaPage } from './attivita-new-crea.page';

const routes: Routes = [
  {
    path: '',
    component: AttivitaNewCreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttivitaNewCreaPageRoutingModule {}
